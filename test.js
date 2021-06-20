import { HomonymJa } from "./mod.js";

const dict = await HomonymJa.load();
console.log("ついきゅう --> " + dict.get("ついきゅう"));
console.log("はえる --> " + dict.get("はえる"));
