const helpers = require('../server/helpers');
// const db = require('../database/index');

describe('tests', () => {
  test('expect 1 to equal 1', () => {
    const sum = 1;
    expect(sum).toBe(1);
  });
});

describe('helpers', () => {
  test('expect getRandomInt to be a function', () => {
    expect(typeof helpers.getRandomInt).toBe('function');
  });

  test('expect getRandomInt to generate random data', () => {
    let result = 0;
    for (let i = 0; i < 10000; i++) {
      result += helpers.getRandomInt(10);
    }
    result = result / 10000;
    expect(result).toBeGreaterThan(4);
    expect(result).toBeLessThan(6);
  });
});

describe('database', () => {
  // TBD test('expect db to have property initAndSeed', () => {
  //   expect(db.hasOwnProperty('initAndSeed')).toBe(true);
  // });
});

describe('server', () => {
  // TBD
});

describe('client', () => {
  // TBD
});
