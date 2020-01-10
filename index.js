function sum( a, b ){
    return a + b;
}

function mult( a, b ) {
    return a * b;
}
function div( a, b ) {
    if ( b === 0 )  {
        return ('Division by zero');
    }
    return a / b;
}

function divNumbers(a, b) {
    if (Number.isInteger(a / b)) {
        return true;
    }
    return false;
}

function isAdult ( number ) {
    if( number < 0 )
        return undefined;
    if ( number > 20 ) {
        return true;
    }
    return false;
}

function sortArrayUp ( arrayNumbers ) {
    if ( typeof(arrayNumbers) === 'undefined' ) {
        return [];
    }
    return arrayNumbers.sort((a,b) => a - b);
}

function isPalindrome( string ) {
    let rev = string.split('').reverse().join('').toLowerCase();
    if ( string.toLowerCase() === rev ){
        return true;
    }
    return false;
}

function isOddNumber(number) {
    if ( number % 2 ) {
        return true;
    }
    return false;
}

function isEvenNumber(number) {
    if ( number % 2 === 0 ) {
        return true;
    }
    return false;
}



module.exports = {sum, mult, div, divNumbers, isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber};