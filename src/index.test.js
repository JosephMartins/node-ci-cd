const sum = require('./index');

test("add 1 + 5 to be equal 6", () => {
  expect(sum(1,5)).toBe(6);
})