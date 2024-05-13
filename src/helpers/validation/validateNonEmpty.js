export const validateNonEmpty = (note, stringProperties) => {
  for (let key of stringProperties) {
    if (!note[key] || note[key].trim() === '') {
      return false;
    }
  }
  return true;
}