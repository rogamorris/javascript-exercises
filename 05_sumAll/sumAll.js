const sumAll = function(int1, int2) {
    // check if int1 and int2 are positive and numbers
    if (int1 < 0 || int2 < 0) {
        return "ERROR";
    } else if (typeof int1 != 'number' || typeof int2 != 'number') {
        return "ERROR";
    };

    let biggerInt;
    let smallerInt;
    let output = 0;

    if (int1 > int2) {
        biggerInt = int1;
        smallerInt = int2;
    } else if (int2 > int1) {
        biggerInt = int2;
        smallerInt = int1;
    } else {
        output = int1 + int2;
    }

    for (let i = smallerInt; i <= biggerInt; i++) {
        output += i;
    }

    return output;
};


// Do not edit below this line
module.exports = sumAll;
