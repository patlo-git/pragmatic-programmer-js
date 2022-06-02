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

/* Option 2 */

// function validateAge(value) {
//   validateNumberGreaterThanX(value, 21);
// }

// function validateQuantity(value) {
//   validateNumberGreaterThanX(value, 0);
// }

// function validateNumberGreaterThanX(value, x) {
//   if (!Number.isInteger(value)) {
//     throw new Error('Input needs to be a Number type.')
//   }

//   return value > x;
// }

// console.log(validateAge(21), validateQuantity(12));