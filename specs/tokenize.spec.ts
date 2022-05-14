import { tokenize } from '../src/tokenize';
import { expect, should } from 'chai';
import { join } from 'path';
import { readFileSync } from 'fs';

describe('#tokenize', () => {
  context('Valid input', () => {
    context('tokenizes the input file', () => {
      let tokenized: string[];
      beforeEach(() => {
        const filePath = join(__dirname, './inputs/comments.lsp');
        const comments = readFileSync(filePath).toString();
        tokenized = tokenize(comments) as string[];
      });
      it('doesn\'t break strings', () => {
        const literalString = tokenized.includes('"Hello, World!"');
        expect(literalString).is.true;
      });
      it('ignores commented lines', () => {
        const commentedLine = tokenized.includes(
          ';; ignoring lines is easy'
        );
        expect(commentedLine).is.false;
      });
    });
    context('validate the brackets balance', () => {
      const invalidInput = '(setq x 3';
      it('dont tokenize if isnt balanced', () => {
        expect(tokenize(invalidInput)).to.be.false;
      });
    })
  });
});
