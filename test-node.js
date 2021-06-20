const HomonymJa = require(".");

async function main() {
  const dict = await HomonymJa.load();
  console.log("ついきゅう --> " + dict.get("ついきゅう"));
  console.log("はえる --> " + dict.get("はえる"));
}
main();
