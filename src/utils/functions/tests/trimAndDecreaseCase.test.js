import { expect, test } from '@jest/globals'

import { trimAndDecreaseCase } from "../trimAndDecreaseCase";

const testObj = {
    field0: "  string with beginning and ending spaces.  ",
    field1: "String with raNdomly CapiTaliZed LettErs.",
    field2: "string with neithter."
}

const fields = ["field0", "field1"]

trimAndDecreaseCase(testObj, fields)

test('trims whitespace before and after text', () => {
    expect(testObj["field0"]).toBe('string with beginning and ending spaces.')
});

test('change uppercase letters to lowercase', () => {
    expect(testObj["field1"]).toBe('string with randomly capitalized letters.')
});