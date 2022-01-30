export function transformClassName(className = '') {
  return className.replace(/(\r\n|\n|\r)/gm, ' ').replace(/ +/g, ' ').trim();
}