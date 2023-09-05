// adjust from local timezone to UTC
export const adjustForTimezoneOffset = date => {
    const timezoneOffset = date.getTimezoneOffset()
    let offsetMinutes = timezoneOffset % 60
    let offsetHours = Math.floor(timezoneOffset) / 60
    date.setHours(date.getHours() + offsetHours)
    date.setMinutes(date.getMinutes() + offsetMinutes)
    return date
}