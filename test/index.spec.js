const  assert = require('assert');
const {expect} = require('chai');
const {sum, mult, div, isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber} = require('../index.js');

describe('function sum', () => {
    it('should function sum equal 6', () => {
        assert.equal(sum(2, 4),6);
        expect(sum(2,4)).to.equal(6);
    })

    it('should function sum not equals 0', () => {
        assert.notEqual(sum(2, 4),0);
        expect(sum(2,4)).to.not.equal(0);
    })
})

describe('function mult', () => {
    it('should function mult works correctly', () => {
        assert.equal(mult(2, 4), 8);
        expect(mult(2, 4)).to.equal(8);
    })
    it('should function mult equal 0', () => {
        assert.equal(mult(2, 0), 0);
        expect(mult(2, 0)).to.equal(0);
    })
})

describe('function div', () => {
    it('should function div works correctly', () => {
        assert.equal(div(60, 2), 30);
        expect(div(60, 2)).eq(30);
    })
    it('should function div equal \'Division by zero\'', () => {
        //assert.equal(div(20, 0), 'Division by zero');
        expect(div(20, 0)).to.eq('Division by zero');
    })
})

describe('function isAdult', () => {
    it('should function isAdult equal 21', () => {
        assert.equal(isAdult(21), true);
        expect(isAdult(21)).to.be.true;
    })
    it('should function isAdult equal more than 21', () => {
        assert.equal(isAdult(55), true);
        expect(isAdult(55)).to.true;
    })
    it('should function isAdult not equal if less than 21', () => {
        assert.notEqual(isAdult(2), true);
        expect(isAdult(2)).to.not.true;
    })
    it('should function isAdult equal undefined', () => {
        assert.equal(isAdult(-5), undefined);
        expect(isAdult(-5)).undefined;
    })
})

describe('function sortArrayUp', () => {
    it('should function sortArrayUp works correctly', () => {
        assert.deepEqual(sortArrayUp([2, 3, 4, 0, 1]), [0, 1, 2, 3, 4]);
        expect(sortArrayUp([2, 3, 4, 0, 1])).to.deep.equal([0, 1, 2, 3, 4]);
    })
    it('should function sortArrayUp works correctly', () => {
        assert.notEqual(sortArrayUp([1, 9, 125, 2, 289]), [1,2,4,9,125,289]);
        expect(sortArrayUp([1, 9, 125, 2, 289])).to.not.equal([1,2,4,9,125,289]);
    })
    it('should function sortArrayUp equal empty array', () => {
        assert.deepEqual(sortArrayUp(), []);
        expect(sortArrayUp()).to.deep.equal([]);
    })
})

describe('function isPalindrome', () => {
    it('should function isPalindrome equal `ogo`', () => {
        assert.equal(isPalindrome('ogo'), true);
        expect(isPalindrome('ogo')).eq(true);
    })
    it('should function isPalindrome equal `gaga` be false', () => {
        assert.equal(isPalindrome('gaga'), false);
        expect(isPalindrome('gaga')).eq(false);
    })
    it('should function isPalindrome equal empty string', () => {
        assert.equal(isPalindrome(''), true);
        expect(isPalindrome('')).eq(true);
    })
})

describe('function isOddNumber' , () => {
    it('should function isOddNumber equal true', () => {
        assert.equal(isOddNumber(7), true);
        expect(isOddNumber(7)).eq(true);
    })
    it('should function isOddNumber equal false', () => {
        assert.equal(isOddNumber(4), false);
        expect(isOddNumber(4)).eq(false);
    })
    it('should function isOddNumber equal true', () => {
        assert.equal(isOddNumber(-5), true);
        expect(isOddNumber(-5)).eq(true);
    })
    it('should function isOddNumber equal false', () => {
        assert.equal(isOddNumber(), false);
        expect(isOddNumber()).eq(false);
    })
})

describe('function isEvenNumber', () => {
    it('should function isEvenNumber equal true', () => {
        assert.equal(isEvenNumber(8), true);
        expect(isEvenNumber(8)).eq(true);
    })
    it('should function isEvenNumber equal false', () => {
        assert.equal(isEvenNumber(81), false);
        expect(isEvenNumber(81)).eq(false);
    })
    it('should function isEvenNumber equal true', () => {
        assert.equal(isEvenNumber(-18), true);
        expect(isEvenNumber(-18)).eq(true);
    })
    it('should function isEvenNumber equal false', () => {
        assert.equal(isEvenNumber(), false);
        expect(isEvenNumber()).eq(false);
    })
})
