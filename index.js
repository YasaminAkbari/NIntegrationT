function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    return 'the divider can not be zero';
  } else {
    return a / b;
  }
}


module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
};
