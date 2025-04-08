function printNumbers(n) {
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
