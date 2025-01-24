// mocha and chai test cases to validate 
// Arithmetic functions percentage and square

const {expect} = require('chai')
const {add, sub, mul, div} = require('../app/calculator')

describe('Validating Calculator', () => {
    it('expected result 7 for add(5, 2)', () => {
      expect(add(5, 2)).to.equal(7);
    });
  
    it('expected result 8 to fail for add(5, 2)', () => {
      expect(add(5, 2)).to.not.equal(8);
    });
  
    it('expected result 3 for sub(5, 2)', () => {
      expect(sub(5, 2)).to.equal(3);
    });

  
    it('expected result 5 to fail for sub(5, 2)', () => {
      expect(sub(5, 2)).to.not.equal(5);
    });
  
    it('expected result 10 for mul(5, 2)', () => {
      expect(mul(5, 2)).to.equal(10);

    });
  
    it('expected result 12 to fail for mul(5, 2)', () => {
        
      expect(mul(5, 2)).to.not.equal(12);
    });
  
    it('expected result 5 for div(10, 2)', () => {
      expect(div(10, 2)).to.equal(5);
    });

  
    it('expected result 2 to fail for div(10, 2)', () => {
      expect(div(10, 2)).to.not.equal(2);
    });

});
