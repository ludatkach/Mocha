function sum(a, b){
    return a + b;
}
function mult( a, b) {
    return a * b;
}
function isAdult (number)  {
    if( number < 0 )
        return undefined;
    if ( number > 20 ) {
        return true;
    }
    return false;
}

//[2, 3, 4, 0, 1]) ---> [0, 1, 2, 3, 4]
function sortArrayUp ( arrayNumbers)  {
    return arrayNumbers.sort((a,b) => a - b);
}
module.exports = {sum, mult, isAdult, sortArrayUp};