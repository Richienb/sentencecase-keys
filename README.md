# sentencecase-keys [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/sentencecase-keys/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/sentencecase-keys)

Convert object keys to sentence case.

[![NPM Badge](https://nodei.co/npm/sentencecase-keys.png)](https://npmjs.com/package/sentencecase-keys)

## Install

```sh
npm install sentencecase-keys
```

## Usage

```js
const sentencecaseKeys = require("sentencecase-keys");

sentencecaseKeys({ helloWorld: 1, "foo-bar": 2 });
//=> { "Hello world": 1, "Foo bar": 2 }

sentencecaseKeys([{ helloWorld: 1 }, { "hello-world": 1 }]);
//=> [{ "Hello world": 1 }, { "Hello world": 1 }]
```

## API

### sentencecaseKeys(object, options?)

#### object

Type: `object or array of objects`

The object to convert.

#### options

Type: `object`

Options to pass to [map-obj](https://github.com/sindresorhus/map-obj#options).
