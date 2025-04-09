function checkAge(age) {
  const numberAge = Number(age);

  if (isNaN(numberAge) || numberAge < 0) {
    throw new Error("Âge invalide.");
  }

  if (age < 18) {
    return "Vous êtes mineur.";
  }

  if (age < 65) {
    return "Vous êtes majeur.";
  }

  return "Vous êtes senior.";
}
export default checkAge;
