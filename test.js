const test = require("ava")
const sentencecaseKeys = require(".")

test("main", t => {
	t.deepEqual(sentencecaseKeys({ helloWorld: 1, "foo-bar": 2 }), { "Hello world": 1, "Foo bar": 2 })

	t.deepEqual(sentencecaseKeys([{ helloWorld: 1 }, { "hello-world": 1 }]), [{ "Hello world": 1 }, { "Hello world": 1 }])
})
