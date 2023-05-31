import { readLines } from "https://deno.land/std/io/mod.ts";

const outPath = "homonym.csv";
const dicts = [
  "SudachiDict/src/main/text/small_lex.csv",
  "SudachiDict/src/main/text/core_lex.csv",
];

function kanaToHira(str) {
  return str.replace(/[ァ-ヶ]/g, (match) => {
    const chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });
}

function getWord(line) {
  const arr = line.split(",");
  const surface = arr[0];
  const leftId = arr[1];
  const pos1 = arr[5];
  const pos2 = arr[6];
  const form2 = arr[10];
  const yomi = arr[11];
  const word = arr[12];
  const abc = arr[14];
  const kanjiRegexp = /[\u4E00-\u9FFF]/g;
  if (leftId == "-1") return false;
  if (!kanjiRegexp.test(surface)) return false;
  if (pos1 == "名詞") {
    // "わる乗り, 悪のり, 悪乗り" を同音異義語とするのは無理がある
    // 漢字だけの熟語にすると "開き口, 秋口" などを見逃す
    // word で正規化しても "顎髭, 顎ひげ" が残る
    // A 基準に限定すると必要なパターンがかなり失われる
    // --> 漢字に限定しつつ surface で登録するのが一番マシ
    if (!/^[\u4E00-\u9FFF]+$/.test(surface)) return false;
    if (pos2 == "固有名詞") return false;
    return [surface, yomi];
  } else {
    // "割り切れる, 割りきれる, 割切れる" を同音異義語とするのは無理がある
    // word で正規化すると "挙げる --> 上げる" に正規化される
    // B 基準以上は surface だと不要な語句が多すぎる
    // --> A 基準に限定して word で正規化するのが一番マシ
    if (form2 != "終止形-一般") return false;
    if (abc != "A") return false;
    if (surface != word) return false;
    return [word, yomi];
  }
}

async function addData(path) {
  const fileReader = await Deno.open(path);
  for await (const line of readLines(fileReader)) {
    if (!line) continue;
    const data = getWord(line);
    if (data && data[0] && data[1]) {
      let [word, yomi] = data;
      yomi = kanaToHira(yomi);
      const words = d[yomi];
      if (words) {
        if (!d[yomi].includes(word)) {
          d[yomi].push(word);
        }
      } else {
        d[yomi] = [word];
      }
    }
  }
}

const d = {};
for (const dict of dicts) {
  await addData(dict);
}
for (const [yomi, words] of Object.entries(d)) {
  if (words.length < 2) delete d[yomi];
}
const arr = Object.entries(d).map(([k, v]) => [k, v]);
arr.sort();

let result = "";
for (const [yomi, words] of arr) {
  result += yomi + "," + words.join(",") + "\n";
}
Deno.writeTextFileSync(outPath, result);
