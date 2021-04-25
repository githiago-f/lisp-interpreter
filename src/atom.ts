export type Atom = {
  value: string;
  next: Atom;
  hasValue: (searchValue: string, head?: Atom) => boolean;
  push: (newValue: Atom, head?: Atom) => void;
}

type fnAtom = (value: string, next?: Atom | null) => Atom

export const atom: fnAtom = (value, next = null) => {
  const aAtom = { next, value } as Atom;

  aAtom.hasValue = function(searchValue, head = aAtom) {
    if(searchValue === head.value) {
      return true;
    }
    if(head.next !== null) {
      return this.hasValue(searchValue, head.next);
    }
    return false;
  }

  aAtom.push = function(newValue, head = aAtom) {
    if(head.next === null){
      head.next = newValue;
      return head;
    }
    return this.push(newValue, head.next);
  }

  return aAtom;
};
