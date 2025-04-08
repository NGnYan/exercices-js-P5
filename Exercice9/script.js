function checkAge(age) {
  if (age < 18) {
    return "Vous êtes mineur.";
  }

  if (age < 65) {
    return "Vous êtes majeur.";
  }

  return "Vous êtes senior.";
}
export default checkAge;
