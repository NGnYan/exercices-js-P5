function add(a, b) {
  const numberA = Number(a);
  const numberB = Number(b);

  if (isNaN(numberA) || isNaN(numberB)) {
    throw new Error("Erreur, les valeurs doivent être des nombres.");
  }

  return numberA + numberB;
}

export default add;
