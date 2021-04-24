import { tokenize } from '../src/utils/tokenize';
import { expect } from 'chai';
import { join } from 'path';
import { readFileSync } from 'fs';

describe('#tokenize', () => {
  describe('Valid input', () => {
    context('contains string literal', () => {
      const validInput = '(print "Hello world!")';
      const tokenized = tokenize(validInput);
      it('Doesn\'t break strings', () => {
        expect(tokenized.next).not.be.equal(null);
        expect(tokenized.next.next.value).to.be.equal('"Hello world!"');
      });
    });
    context('has comments (;;)', () => {
      const filePath = join(__dirname, './inputs/comments.lsp');
      const validInput = readFileSync(filePath);
      const tokenized = tokenize(validInput.toString());
      it('Ignores commented lines', () => {
        expect(tokenized.next).not.to.be.equal(null);
        expect(tokenized.value).to.be.equal('(');
      });
    });
  })
});
