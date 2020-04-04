"use strict"

const mapObject = require("map-obj")
const { sentenceCase } = require("sentence-case")

// Reproduces behavior from `map-obj`
const isObject = value =>
	typeof value === "object" &&
	value !== null &&
	!(value instanceof RegExp) &&
	!(value instanceof Error) &&
	!(value instanceof Date)

const sentencecaseKeys = (object, options) => {
	return mapObject(object, (key, value) => [sentenceCase(key), value], options)
}

module.exports = (object, options) => {
	if (isObject(object)) {
		return sentencecaseKeys(object, options)
	}

	if (Array.isArray(object)) {
		return object.map(value => sentencecaseKeys(value, options))
	}

	throw new Error("An object or array of objects must be provided!")
}
