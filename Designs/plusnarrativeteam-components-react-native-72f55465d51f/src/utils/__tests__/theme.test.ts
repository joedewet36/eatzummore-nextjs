import { applyAlpha } from '@plus-components/utils/theme';

describe('applyAlpha()', () => {
  test('return correct full alpha value', () => {
    const result = applyAlpha('#ff00ff', 1);
    expect(result).toEqual('#ff00ffff');
  });
  test('return correct 0.5 alpha value', () => {
    const result = applyAlpha('#ff00ff', 0.5);
    expect(result).toEqual('#ff00ff80');
  });
  test('return correct 0.1 alpha value', () => {
    const result = applyAlpha('#ff00ff', 0.1);
    expect(result).toEqual('#ff00ff1a');
  });
  test('return correct 0 alpha value', () => {
    const result = applyAlpha('#ff00ff', 0);
    expect(result).toEqual('#ff00ff00');
  });
});
