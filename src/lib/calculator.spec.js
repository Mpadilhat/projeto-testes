const { somar } = require("./calculator");

it("deve somar 2 + 2 e o resultado deve ser 4", () => {
  expect(somar("2", 2)).toBe(4);
});

it("deve somar 2 + 2 e, mesmo que um deles seja uma string, o resultado deve ser 4", () => {
  expect(somar("2", 2)).toBe(4);
});

it("deve mostrar um erro se o que for passado para o método não puder ser somado", () => {
  expect(() => {
    somar("", "1");
  }).toThrowError();

  expect(() => {
    somar([2, 2]);
  }).toThrowError();

  expect(() => {
    somar({});
  }).toThrowError();

  expect(() => {
    somar();
  }).toThrowError();
});
