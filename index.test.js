const math = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(math.addition(1, 2)).toBe(3);
});

test('subtract 1 - 2 to equal -1', () => {
  expect(math.subtraction(1, 2)).toBe(-1);
});

test('multiply 3 * 3  to equal 9', () => {
  expect(math.multiplication(3, 3)).toBe(9);
});

test('divide 4 / 2 to equal 2', () => {
  expect(math.division(4, 2)).toBe(2);
});

test('divide 4 / 0 to equal the divider can not be zero', () => {
  expect(math.division(4, 0)).toBe('the divider can not be zero');
});

test('divide 6 / 3 to equal 2', () => {
  expect(math.division(6, 3)).toBe(2);
});

test('divide 6 / 2 to equal 3', () => {
  expect(math.division(6, 2)).toBe(3);
});


test('divide 10 / 2 to equal 5', () => {
  expect(math.division(10, 2)).toBe(5);
});


test('divide 10 + 2 to equal 12', () => {
  expect(math.addition(10, 2)).toBe(12);
});


