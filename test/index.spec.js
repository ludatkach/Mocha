const  assert = require('assert');
const {sum, mult, isAdult} = require('../index.js');

describe('function sum', () => {
    it('should function sum equal 6', () => {
        assert.equal(sum(2, 4),6);
    })

    it('should function sum not equals 0', () => {
        assert.notEqual(sum(2, 4),0);
    })
})

it('should mult works correct', () => {
    assert.equal(mult(2,4), 8);
})

describe('function isAdult', () => {
    it('should function isAdult equal 21', () => {
        assert.equal(isAdult(21), true);
    })
    it('should function isAdult equal more than 21', () => {
        assert.equal(isAdult(55), true);
    })
    it('should function isAdult false if more than  21', () => {
        assert.notEqual(isAdult(30), false);
    })
    it('should function isAdult false if more than 21', () => {
        assert.notEqual(isAdult(21), false);
    })
})
