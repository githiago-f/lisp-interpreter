import { Atom } from "./atom";

export const push = (head: Atom, value: Atom) => {
  if(head.next === null){
    head.next = value;
    return head;
  }
  return push(head.next, value);
}
