export const validateType = (note, expectedTypes) => {
  for (let key in expectedTypes) {
    if (typeof note[key] !== expectedTypes[key]) {
      return false;
    }
  }
  return true;
}