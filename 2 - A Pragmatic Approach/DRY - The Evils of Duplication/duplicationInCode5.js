function validateAge(value) {
  if (!Number.isNumber(value)) {
    throw new Error('Input needs to be a Number type.')
  }

  return value > 0;
}

function validateQuantity(value) {
  if (!Number.isNumber(value)) {
    throw new Error('Input needs to be a Number type.')
  }

  return value > 0;
}

/* Option 2 */
// function validateAge(value) {
//   validateNumberGreaterThanX(value, 21);
// }

// function validateQuantity(value) {
//   validateNumberGreaterThanX(value, 0);
// }

// function validateNumberGreaterThanX(value, x) {
//   if (!Number.isNumber(value)) {
//     throw new Error('Input needs to be a Number type.')
//   }

//   return value > x;
// }