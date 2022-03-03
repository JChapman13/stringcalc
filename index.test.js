const addNum = require("./index");

test("input is '1,2,5' (as a string)- expect result of 8", () => {
  expect(addNum("1,2,5")).toBe(8);
});

test("Empty string as an input would return 0", () => {
  expect(addNum("")).toBe(0);
});

test("input should handle new lines", () => {
  expect(addNum("1,\n2,4")).toBe(7);
});

test("input should support custom delimiter", () => {
  expect(addNum("//;\n1;3;4")).toBe(8);
});

test("input with negative numbers should throw exception, with statement 'negatives not allowed'", () => {
  expect(() => {
    addNum("-5,-2,-4");
  }).toThrow("Negatives not allowed, value(s) of -5, -2, -4 found.");
});

test("numbers larger than 1000 should be ignored", () => {
  expect(addNum("2, 1001")).toBe(2);
});

test("custom delimiter can be any length", () => {
  expect(addNum("//***\n1***2***3")).toBe(6);
});
