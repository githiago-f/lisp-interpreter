import { command } from "./command";

export const parseValue = (value: string) => {
  const asNum = parseFloat(value);
  if(!isNaN(asNum)) {
    return asNum;
  }
  const literals = value.match(/\"(.*?)\"/);
  if(literals.length>1) {
    return literals.shift()
      .replace(/\"/g, '');
  }
  return command(value); // is a command
}
