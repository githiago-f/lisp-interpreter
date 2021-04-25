import { atom } from "./atom";
import { push } from "./push";

export const tokenize = (input: string) => {
  const items = input
    .replace(/\;\;(.*?)\n|\n\r|$/g, '')
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
