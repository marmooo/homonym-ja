# homonym-ja
Japanese homonym dictionary.

## Installation
```
npm install homonym-ja
```

## Build
1. install [SudachiDict](https://github.com/WorksApplications/SudachiDict)
2. install [NAIST-jdic](https://ja.osdn.net/projects/naist-jdic/downloads/53500/mecab-naist-jdic-0.6.3b-20111013.tar.gz/)
3. ```npm install```
4. ```node build.js```
5. ```bash build.sh```

## Usage
```
const HomonymJa = require('homonym-ja');

const dict = new HomonymJa();
dict.get('ついきゅう');  // --> [追究, 追及, etc.]
```

## License
Apache-2.0

## Attribution
- [SudachiDict](https://github.com/WorksApplications/SudachiDict) is licensed under the [Apache-2.0](http://www.apache.org/licenses/LICENSE-2.0).

