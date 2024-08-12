# homonym-ja

Japanese homonym dictionary.

## Build

- install [SudachiDict](https://github.com/WorksApplications/SudachiDict)
  licensed under the [Apache-2.0](http://www.apache.org/licenses/LICENSE-2.0)
- `deno run --allow-read --allow-write build-dict.js`
- `bash build.sh`

## Usage

```
import { HomonymJa } from "homonym-ja/mod.js";

const dict = await HomonymJa.load("homonym.csv");
dict.get("ついきゅう");  // --> ["追究", "追及", etc.]
```

## License

Apache-2.0
