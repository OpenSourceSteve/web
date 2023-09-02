import { expect, test } from '@jest/globals'

import { adjustForTimezoneOffset } from "../adjustForTimezoneOffset";
// Pacific
const inputDate = new Date('September 2, 2023 00:00:00')

// UTC
const outputDate = new Date('September 2, 2023 07:00:00')

// modify test depending on what timezone it's run from (and daylight savings)
test('adjusts for Pacific timezone offset', () => {
    expect(adjustForTimezoneOffset(inputDate) - outputDate).toBe(0)
});