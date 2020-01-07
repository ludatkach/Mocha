const  assert = require('assert');
const {sum, mult, isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber} = require('../index.js');

describe('function sum', () => {
    it('should function sum equal 6', () => {
        assert.equal(sum(2, 4),6);
    })

    it('should function sum not equals 0', () => {
        assert.notEqual(sum(2, 4),0);
    })
})

    it('should function mult works correct', () => {
        assert.equal(mult(2,4), 8);
})

describe('function isAdult', () => {
    it('should function isAdult equal 21', () => {
        assert.equal(isAdult(21), true);
    })
    it('should function isAdult equal more than 21', () => {
        assert.equal(isAdult(55), true);
    })
    it('should function isAdult equal undefined', () => {
        assert.equal(isAdult(-5), undefined);
    })
    it('should function isAdult not equal if more than  21', () => {
        assert.notEqual(isAdult(30), false);
    })
    it('should function isAdult not equal if less than 21', () => {
        assert.notEqual(isAdult(2), true);
    })
})
/*
describe('function sortArrayUp', () => {
    it('should function sortArrayUp works correct', () => {
        assert.equal(sortArrayUp([2, 3, 4, 0, 1]), [0, 1, 2, 3, 4]);
    })
})  */

describe('function isPalindrome', () => {
    it('should function isPalindrome equal `ogo`', () => {
        assert.equal(isPalindrome('ogo'), true);
    })
    it('should function isPalindrome equal `go`', () => {
        assert.equal(isPalindrome('go'), false);
    })
    it('should function isPalindrome equal empty string', () => {
        assert.equal(isPalindrome(''), true);
    })
    it('should function isPalindrome not equal `go`', () => {
        assert.notEqual(isPalindrome('gaga'), true);
    })
})

describe('function isOddNumber' , () => {
    it('should function isOddNumber equal true', () => {
        assert.equal(isOddNumber(7), true);
    })
    it('should function isOddNumber equal false', () => {
        assert.equal(isOddNumber(4), false);
    })
    it('should function isOddNumber equal true', () => {
        assert.equal(isOddNumber(-5), true);
    })
    it('should function isOddNumber not equal true', () => {
        assert.notEqual(isOddNumber(7), false);
    })
    it('should function isOddNumber not equal false', () => {
        assert.notEqual(isOddNumber(4), true);
    })
})

describe('function isEvenNumber', () => {
    it('should function isEvenNumber equal true', () => {
        assert.equal(isEvenNumber(8), true);
    })
    it('should function isEvenNumber equal false', () => {
        assert.equal(isEvenNumber(81), false);
    })
    it('should function isEvenNumber equal true', () => {
        assert.equal(isEvenNumber(-18), true);
    })
    it('should function isEvenNumber not equal true', () => {
        assert.notEqual(isEvenNumber(55), true);
    })
    it('should function isEvenNumber not equal false', () => {
        assert.equal(isEvenNumber(999), false);
    })

})
