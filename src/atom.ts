export type Atom = {
  value: string | number;
  next: Atom;
}

type fnAtom = (value: string | number, next?: Atom | null) => Atom

export const atom: fnAtom = (value, next = null) => {
  return {
    next,
    value
  };
};
