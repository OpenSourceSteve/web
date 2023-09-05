// TODO: make this a non-argument-mutating function, return updated clone
export const trimAndDecreaseCase = (obj, fields) => {
    fields.forEach(field => {
      obj[field] = obj[field].trim().toLowerCase()
    })
  }