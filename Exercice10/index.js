function printNumbers(n) {
  const number = Number(n);

  if (isNaN(number) || number <= 0) {
    throw new Error("Le nombre doit être supérieur à 0.");
  }

  let result = "";

  for (let i = 1; i <= n; i++) {
    if (i === n) {
      result += i;
    } else {
      result += i + " ";
    }
  }

  return result;
}

export default printNumbers;
