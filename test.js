import { HomonymJa } from "./mod.js";
import { assertEquals } from "@std/assert";

Deno.test("Simple check", async () => {
  const dict = await HomonymJa.load("homonym.csv");
  assertEquals(dict.get("あさいち"), ["朝一", "朝市"]);
});
