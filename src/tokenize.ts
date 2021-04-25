import { atom } from "./atom";

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

  const head = atom(items.shift());
  items.forEach(i => head.push(atom(i)));

  return head;
}
