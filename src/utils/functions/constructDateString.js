export const constructDateString = date => {
    let month = date.getMonth() + 1
    if (month < 10) {
        month = "0" + month
    }
    let dayOfMonth = date.getDate()
    if (dayOfMonth < 10) {
        dayOfMonth = "0" + dayOfMonth
    }
    return `${date.getFullYear()}-${month}-${dayOfMonth}`
}