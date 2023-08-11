// converts datetime-local value to timezone-formatted ISO 8601 string
export const formatDatetimeWithTimezone = datetime => {
    const offset = new Date().getTimezoneOffset()
    let offsetMinutes = Math.abs(offset % 60)
    if (offsetMinutes < 10) {
        offsetMinutes = "0" + offsetMinutes
    }
    let offsetHours = Math.floor(Math.abs(offset) / 60)
    if (Math.abs(offsetHours) < 10) {
        offsetHours = "0" + offsetHours
    }
    if (offset < 0) {
        datetime = datetime + `:00.000+${offsetHours}:${offsetMinutes}`
    } else if (offset > 0) {
        datetime = datetime + `:00.000-${offsetHours}:${offsetMinutes}`
    } else {
        datetime = datetime + ":00.000Z"
    }
    return datetime
}