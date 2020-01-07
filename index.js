function sum(a, b){
    return a + b;
}
function mult( a, b) {
    return a * b;
}
function isAdult (number)  {
    if ( number > 20 ) {
        return true;
    } else {
        return false;
    }
}
module.exports = {sum, mult, isAdult};