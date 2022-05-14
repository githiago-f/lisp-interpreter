import { last } from 'lodash';

export const isBalanced = (input: string) => {
  const noComands = input.replace(/[^\(\)\[\]\{\}]/gi, '');
  const chars = noComands.split('');
  const q = [];
  for (const char of chars) {
    if (q.length < 1) {
      q.push(char);
    } else if (
      (last(q) === '(' && char === ')') ||
      (last(q) === '{' && char === '}') ||
      (last(q) === '[' && char === ']')
    ) {
      q.pop();
    } else {
      q.push(char);
    }
  }
  return q.length === 0;
}

export const tokenize = (input: string) => {
  if (!isBalanced(input)) return false;

  const items = input
    .replace(/\;\;(.*?)\n|\n\r|$/g, '')
    .replace(/\n/g, '')
    .trim()
    .replace(/\(/gi, '( ')
    .replace(/\)/gi, ' )')
    .replace(/\"(.*?)\"/gi, i => i.replace(/[\s]/gi, '$space$'))
    .split(/\s/)
    .map(i => i.replace(/\$space\$/gi, ' '));

  return items;
}
