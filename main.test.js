const string = require('./main');

test('string length is 11', () => {
  expect(string('description')).toBe(5);
});

