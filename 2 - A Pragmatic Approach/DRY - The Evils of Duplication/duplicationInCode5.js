function validateAge(value) {
  if (!Number.isInteger(value)) {
    throw new Error('Input needs to be a Number type.')
  }

  return value > 0;
}

function validateQuantity(value) {
  if (!Number.isInteger(value)) {
    throw new Error('Input needs to be a Number type.')
  }

  return value > 0;
}

console.log(validateAge(21), validateQuantity(12));