import { build, emptyDir } from "jsr:@deno/dnt";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.js"],
  outDir: "./npm",
  shims: {
    deno: true,
    custom: [{
      package: { name: "stream/web" },
      globalNames: ["TransformStream"],
    }],
  },
  package: {
    name: "homonym-ja",
    version: "0.1.5",
    description: "Japanese homonym dictionary.",
    license: "Apache-2.0",
    main: "mod.js",
    repository: {
      type: "git",
      url: "git+https://github.com/marmooo/homonym-ja.git",
    },
    bugs: {
      url: "https://github.com/marmooo/homonym-ja/issues",
    },
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
    Deno.copyFileSync("homonym.csv", "npm/esm/homonym.csv");
    Deno.copyFileSync("homonym.csv", "npm/script/homonym.csv");
  },
});
