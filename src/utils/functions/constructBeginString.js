import { constructDateString } from "./constructDateString"

export const constructBeginString = () => {
    const beginDate = new Date()
    beginDate.setDate(beginDate.getDate() - beginDate.getDay())
    return constructDateString(beginDate)
}