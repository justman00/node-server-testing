const { add } = require('./index');

it('adds two numbers', () => {
  expect(add(1, 1)).toBe(2);
  expect(add()).toBe(0)
  expect(add(5)).toBe(5)

  expect(add(1, 2, 3, 4, 5)).toBe(15)
});
