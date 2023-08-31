// converts datetime-local value to timezone-formatted ISO 8601 string
export const formatDatetimeWithTimezone = datetime => {
    const offset = new Date().getTimezoneOffset()
    const offsetMinutes = String(Math.abs(offset % 60)).padStart(2, "0")
    const offsetHours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, "0")

    if (offset < 0) {
        datetime = datetime + `:00.000+${offsetHours}:${offsetMinutes}`
    } else if (offset > 0) {
        datetime = datetime + `:00.000-${offsetHours}:${offsetMinutes}`
    } else {
        datetime = datetime + ":00.000Z"
    }
    return datetime
}