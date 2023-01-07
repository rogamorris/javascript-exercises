const reverseString = function(string) {
    // Define a function that accepts a string called "string"
    // Initialize a variable called "output" to an empty string
    // Initialize a variable called "numIterations" to the length of "string"
    // Iterate for "numIterations":
    //      slice the letter in the last position minus the iteration number and add it to "output"
    // return "output"

    let output = "";
    
    let numIterations = string.length;
    for (let i = 0; i < numIterations; i++) {
        output += string.slice(numIterations - (1 + i), numIterations - i);
        console.log(output);
    }

    return output;

};

// Do not edit below this line
module.exports = reverseString;
