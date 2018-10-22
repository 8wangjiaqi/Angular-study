import { APipe } from './a.pipe';

describe('APipe', () => {
  it('create an instance', () => {
    const pipe = new APipe();
    expect(pipe).toBeTruthy();
  });
});
