// Upper first character function
function upperFirst(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export { upperFirst };
