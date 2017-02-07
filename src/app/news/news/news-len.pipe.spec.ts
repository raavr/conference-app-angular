import { MaxLenPipe } from './news-len.pipe';

describe('MaxLenPipe', () => {

  let pipe = new MaxLenPipe();
  const maxLen = 15;

  it('leaves "lorem ipsum" unchanged', () => {
    expect(pipe.transform('lorem ipsum', maxLen)).toBe('lorem ipsum');
  });

  it('transforms "abcdefg hijklmnop" to "abcdefg hijklmn..."', () => {
    expect(pipe.transform('abcdefg hijklmnop', maxLen)).toBe('abcdefg hijklmn...');
  });

  it('leaves "" unchanged', () => {
    expect(pipe.transform('', maxLen)).toBe('');
  });

  it('transforms "a" to "..."', () => {
    let maxLen = 0;
    expect(pipe.transform('a', maxLen)).toBe('...');
  })

  it('transforms "                     " to "               ..."', () => {
    expect(pipe.transform('                     ', maxLen)).toBe('               ...');
  });
});