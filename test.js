import { HomonymJa } from "./mod.js";

let dict = await HomonymJa.load("homonym.csv");
console.log("ついきゅう --> " + dict.get("ついきゅう"));
console.log("はえる --> " + dict.get("はえる"));

dict = await HomonymJa.fetch(
  "https://raw.githubusercontent.com/marmooo/homonym-ja/main/homonym.csv",
);
console.log("ついきゅう --> " + dict.get("ついきゅう"));
console.log("はえる --> " + dict.get("はえる"));
