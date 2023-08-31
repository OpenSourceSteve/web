import { constructDateString } from "./constructDateString"

export const constructTomorrowString = today => {
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return constructDateString(tomorrow)
}