import { constructDateString } from "./constructDateString"

export const constructEndString = () => {
    const endDate = new Date()
    endDate.setDate(endDate.getDate() - endDate.getDay() + 27)
    return constructDateString(endDate)
}