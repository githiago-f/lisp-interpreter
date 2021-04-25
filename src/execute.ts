import { parseValue } from "./parseValue";
import { tokenize } from "./tokenize"

export const execute = (input: string) => {
  const head = tokenize(input);

  while(head.next) {
    const value = parseValue(head.value);
    if(typeof value === 'number') {
      // is a number that will be interpreted in a operation
    }
    else if(typeof value === 'string') {
      // these are string literals
    }
    else {
      // these are commands and will be placed out
    }
  }

}
