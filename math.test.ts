import { describe, expect, test } from "bun:test";

describe(`Math`, () => {
  test(`1 + 1 = 2`, () => {
    expect(1 + 1).toBe(2);
  });

  test(`2 * 3 = 5`, () => {
    expect(2 * 3).toBe(5);
  });
});
