import { cripto, verify } from '../src/index';

describe('testing module', () => {
  test('cripto function', () => {
    expect(cripto('teste','key')).toStrictEqual({"hash": "a123456789abcdefghijklmnopqrstuvw", "salt": 12});
  });

  test('verify function', () => {
    expect(verify('teste', 'key')).toBe(true);
  });
});