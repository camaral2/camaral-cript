import { cripto, verify } from '../src/index';

describe('testing module', () => {
  test('cripto function', () => {
    expect(cripto('teste','key')).toStrictEqual({"hash": "testekey", "salt": 10});
  });

  test('verify function', () => {
    expect(verify('teste', 'key', 10)).toBe(true);
  });
});