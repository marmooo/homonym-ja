# homonym-ja
Japanese homonym dictionary.

## Installation
```
npm install homonym-ja
```

## Build
1. install [NAIST-jdic](https://ja.osdn.net/projects/naist-jdic/downloads/53500/mecab-naist-jdic-0.6.3b-20111013.tar.gz/)
2. install [UniDic](https://unidic.ninjal.ac.jp/)
3. install [SudachiDict](https://github.com/WorksApplications/SudachiDict)
4. ```npm install```
5. ```node build.js``` or ```node build.sh```

## Usage
```
const HomonymJa = require('homonym-ja');

const homonymJa = new HomonymJa();
homonymJa.get('ついきゅう');  // --> [追究, 追及, etc.]
```

## License
Apache-2.0

## Attribution
- [SudachiDict](https://github.com/WorksApplications/SudachiDict) is licensed under the [Apache-2.0](http://www.apache.org/licenses/LICENSE-2.0).

