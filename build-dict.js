import { TextLineStream } from "jsr:@std/streams/text-line-stream";

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
  if (leftId == "-1") return;
  if (!/[\u3400-\u9FFF\uF900-\uFAFF\u{20000}-\u{37FFF}々]/u.test(surface)) {
    return;
  }
  if (
    !/^[ぁ-ゖァ-ヶー\u3400-\u9FFF\uF900-\uFAFF\u{20000}-\u{37FFF}々]+$/u.test(
      word,
    )
  ) return;
  if (pos1 == "名詞") {
    if (pos2 == "固有名詞") return;
    if (surface != word) return;
    return [word, yomi];
  } else {
    if (surface.includes("ー")) return; // noisy
    if (form2 != "終止形-一般") return;
    if (abc != "A") return;
    if (surface != word) return;
    return [word, yomi];
  }
}

async function addData(path) {
  const file = await Deno.open(path);
  const lineStream = file.readable
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new TextLineStream());
  for await (const line of lineStream) {
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
  result += `${yomi},${words.join(",")}\n`;
}
Deno.writeTextFileSync(outPath, result);
