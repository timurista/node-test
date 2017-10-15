const expect = require('expect');
const utils = require('./utils');

describe('utils', () => {
  
  it('should add two numbers', () => {
    expect(utils.add(33, 11)).toBe(44).toBeA('number');
  });

  it('should square 2 numbers', () => {
    expect(utils.square(3)).toBe(9).toBeA('number');
  });

  describe('#playground', () => {
    it('should expect some values', () => {
      expect({name: 'tim'}).toEqual({name: 'tim'});
      expect([1,2,3]).toInclude(3).toExclude(5);
      expect({name: 'tim', age:32, location:'somewhere'})
        .toInclude({ age: 32 });
    });

    it('should verify first last names are set', () => {
      const user = {};
      utils.setName(user, 'tim urista');
      expect(user).toInclude({
        firstName: 'tim',
        lastName: 'urista'
      }).toBeA('object');
    });
  });

  it('should async add 2 numbers', (done) => {
    utils.asyncAdd(4,3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    })
  });

});
