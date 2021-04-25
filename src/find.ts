import { Atom } from "./atom";

export const hasValue = (atom: Atom, value: string | number) => {
  if(atom.value === value) {
    return true;
  }
  if(atom.next !== null) {
    return hasValue(atom.next, value);
  }
  return false;
}
