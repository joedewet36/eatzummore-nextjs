import { safelyParse } from '@plus-components/utils/objects';

describe('safelyParse()', () => {
  test('passing no arguments should return null', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = safelyParse();
    expect(result).toBeNull();
  });
  test('passing empty string should return null', () => {
    const result = safelyParse('');
    expect(result).toBeNull();
  });
  test('passing broken json string should return null', () => {
    const result = safelyParse('{"name": Hagrid');
    expect(result).toBeNull();
  });
  test('passing valid json string should return valid json', () => {
    const result = safelyParse('{"name": "Hagrid"}');
    expect(result.name).toEqual('Hagrid');
  });
});
