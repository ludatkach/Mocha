function sum(a, b){
    return a + b;
}
function mult( a, b) {
    return a * b;
}
function isAdult (number) {
    if( number < 0 )
        return undefined;
    if ( number > 20 ) {
        return true;
    }
    return false;
}

//[2, 3, 4, 0, 1]) ---> [0, 1, 2, 3, 4]
function sortArrayUp ( arrayNumbers) {
    return arrayNumbers.sort((a,b) => a - b);
}

//funct isPalindrome(‘ogo’) ---> true, (‘og’) --> false
function isPalindrome(string) {
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
module.exports = {sum, mult, isAdult, sortArrayUp, isPalindrome, isOddNumber, isEvenNumber};