export const constructDateString = date => {
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const dayOfMonth = String(date.getDate()).padStart(2, "0")
    const year = date.getFullYear()
    return `${year}-${month}-${dayOfMonth}`
}