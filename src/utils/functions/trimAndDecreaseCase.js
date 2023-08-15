export const trimAndDecreaseCase = (obj, fields) => {
    fields.forEach(field => {
      obj[field] = obj[field].trim().toLowerCase()
    })
  }