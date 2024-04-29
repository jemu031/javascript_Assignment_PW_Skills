function findCharacterClasses(str) {
  const lowercaseClass = /[a-z]/g;
  const digitClass = /\d/g;
  const uppercaseClass = /[A-Z]/g;
  const specialCharClass = /[^a-zA-Z0-9]/g;

  let matchobj = {
    lowercaseWords: str.match(lowercaseClass),
    uppercaseWords: str.match(uppercaseClass),
    digits: str.match(digitClass),
    specialChar: str.match(specialCharClass),
  };
  return matchobj;
}

console.log(findCharacterClasses("Hello!123"));
