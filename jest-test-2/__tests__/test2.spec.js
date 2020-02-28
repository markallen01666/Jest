const Test2 = require("../src/test2");

describe("Return function", () => {
  test("it should receive a value and return it incremented by 1", () => {
    expect(Test2(1.3)).toEqual(2.3);
  });
  test("it should not receive a value and return it incremented by more than 1", () => {
    expect(Test2(5)).not.toBeGreaterThan(6);
  });
  test("it should not receive a value and return it incremented by less than 1", () => {
    expect(Test2(13.8)).not.toBeLessThan(12.8);
  });
});