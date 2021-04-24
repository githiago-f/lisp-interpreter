import { atom } from "../value-objects/atom";
import { push } from "./push";

export const compileToExecutable = (input: string) => {
  const items = input
    .replace(/\;\;(.*?)\n/g, '')
    .replace(/\n/g, '')
    .trim()
    .replace(/\(/gi, '( ')
    .replace(/\)/gi, ' )')
    .replace(/\"(.*?)\"/gi, i => i.replace(/[\s]/gi, '$space$'))
    .split(/\s/)
    .map(i => i.replace(/\$space\$/gi, ' '));
  let head = atom(items.shift());
  items.forEach(i => push(head, atom(i)));
  return head;
}
