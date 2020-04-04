import { Options } from "map-obj"

type BaseObject = { [key: string]: any }

/**
Convert object keys to sentence case.
@param object The object to convert.
@param options Options to pass to [map-obj](https://github.com/sindresorhus/map-obj#options).
@example
```
const sentencecaseKeys = require("sentencecase-keys");

sentencecaseKeys({ helloWorld: 1, "foo-bar": 2 });
//=> { "Hello world": 1, "Foo bar": 2 }

sentencecaseKeys([{ helloWorld: 1 }, { "hello-world": 1 }]);
//=> [{ "Hello world": 1 }, { "Hello world": 1 }]
```
*/
declare function sentencecaseKeys<T extends BaseObject>(object: T, options?: Options): T
declare function sentencecaseKeys<T extends BaseObject[]>(object: T, options?: Options): T

export = sentencecaseKeys
