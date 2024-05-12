export function isFileNameSafe(fileName) {
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(fileName)
}
