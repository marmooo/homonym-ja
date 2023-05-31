# homonym-ja

Japanese homonym dictionary.

## Build

- install [SudachiDict](https://github.com/WorksApplications/SudachiDict)
- `deno run --allow-read --allow-write build.js`
- `bash build.sh`

## Usage

```
import { HomonymJa } from "homonym-ja/mod.js";

const dict = await HomonymJa.load("homonym.csv");
dict.get('ついきゅう');  // --> [追究, 追及, etc.]
```

## License

Apache-2.0

## Attribution

- [SudachiDict](https://github.com/WorksApplications/SudachiDict) is licensed
  under the [Apache-2.0](http://www.apache.org/licenses/LICENSE-2.0).
