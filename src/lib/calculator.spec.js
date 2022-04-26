const { somar } = require("./calculator");

it("deve somar 2 + 2 e o resultado deve ser 4", () => {
  expect(somar(2, 2)).toBe(4);
});
