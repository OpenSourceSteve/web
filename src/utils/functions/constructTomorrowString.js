import { constructDateString } from "./constructDateString"

export const constructTomorrowString = today => {
    const tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 1)
    return constructDateString(tomorrow)
}