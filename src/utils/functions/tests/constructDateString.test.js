import { constructDateString } from "../constructDateString";

const inputDate1 = new Date(2023, 8, 2)

test("date string to be constructed with padded zeros", () => {
    expect(constructDateString(inputDate1)).toBe("2023-09-02");
})

const inputDate2 = new Date(2023, 9, 10)

test("date string to be constructed without padded zeros", () => {
    expect(constructDateString(inputDate2)).toBe("2023-10-10");
})