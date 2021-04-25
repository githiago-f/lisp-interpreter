import { tokenize } from '../src/tokenize';
import { expect } from 'chai';
import { join } from 'path';
import { readFileSync } from 'node:fs';

describe('#tokenize', () => {
  context('Valid input', () => {
    const filePath = join(__dirname, './inputs/comments.lsp');
    const comments = readFileSync(filePath).toString();

    context('contains string literal', () => {
      const tokenized = tokenize(comments);
      it('Does not break strings', () => {
        const hasString = tokenized.hasValue("\"Hello, World!\"");
        expect(tokenized.next).not.be.equal(null);
        expect(hasString).to.be.true;
      });
    });

    context('has comments (;;)', () => {
      const tokenized = tokenize(comments);
      it('ignores commented lines', () => {
        const hasCommenttedString = tokenized.hasValue(";;");
        expect(tokenized.value).to.be.equal('(');
        expect(hasCommenttedString).to.be.false;
      });
    });
  });
});
