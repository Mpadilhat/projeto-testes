module.exports.somar = (n1, n2) => {
  const num1 = parseInt(n1);
  const num2 = parseInt(n2);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    throw new Error("Verifique os números informados");
  }

  return num1 + num2;
};
