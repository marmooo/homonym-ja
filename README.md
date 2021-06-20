# homonym-ja

Japanese homonym dictionary.

## Build

1. install [SudachiDict](https://github.com/WorksApplications/SudachiDict)
2. install
   [NAIST-jdic](https://ja.osdn.net/projects/naist-jdic/downloads/53500/mecab-naist-jdic-0.6.3b-20111013.tar.gz/)
3. `deno run --allow-read --allow-write build.js`
4. `bash build.sh`

## Usage (Deno)

```
import { HomonymJa } from "homonym-ja/mod.js";

const dict = await HomonymJa.load();
dict.get('ついきゅう');  // --> [追究, 追及, etc.]
```

## Usage (Node.js)

```
// npm install homonym-ja
const YomiDict = require("homonym-ja");

async function main() {
  const dict = await HomonymJa.load();
  dict.get('ついきゅう');  // --> [追究, 追及, etc.]
}
main();
```

## License

Apache-2.0

## Attribution

- [SudachiDict](https://github.com/WorksApplications/SudachiDict) is licensed
  under the [Apache-2.0](http://www.apache.org/licenses/LICENSE-2.0).
