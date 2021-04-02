import { readFile } from 'fs/promises';
import { compileToExecutable } from './../utils/compiler';

describe('# compileToExecutable', () => {
  it('should serialize preserving commands and strings', () => {
    const inputFileContent = '(print "My Input file")';
    const output = compileToExecutable(inputFileContent);
    const actualOutput = {
      value: '(',
      next: {
        value: "print",
        next: {
          value: "\"My Input file\"",
          next: {
            value: ")",
            next: null
          }
        }
      }
    };
    expect(output).toEqual(actualOutput);
    expect(output.next.next.next.value).toBe(")");
    expect(() => output.next.next.next.next.value)
      .toThrowError('Cannot read property \'value\' of null');
  });

  it('should remove blank lines', () => {
    const inputFileContent = '\
    \
    \
    (def x 5)\
    (if x > 1 (println "X is greater than 1"))\
    ';
    const output = compileToExecutable(inputFileContent);
    expect(output.value).toBe('(');
  });

  it('should ignore commented lines (use ;; to comment)', () => {
    const inputFileContent = `
    ;; commented line
    ;; multiple comment line

    (def x 5)
    (if x > 1 (println "X is greater than 1"))
    ;; last line as comment will be desabled too`;

    const output = compileToExecutable(inputFileContent);
    expect(output.value).toBe("(");
  });

  it('should serialize input file', async () => {
    const fileInput = await readFile('./src/__test__/inputs/comments.lsp');
    const output = compileToExecutable(fileInput.toString());
    expect(output.value).toBe('(');
    expect(output.next.value).toBe("setq");
  })
});

