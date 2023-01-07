const repeatString = function(string, num) {
    // Define a function that accepts a string and a number
    // Define the function arguments as variables, "string" and "num"
    // Check that "string" is a string, and the "num" is a positive int
    //     If not, return an error with a descriptive statement
    //     If yes, continue
    // Initialize a variable called "output" to "string"
    // Iterate for "num" amount of times:
    //     "output" += "string"
    // return "output"

    if (num < 0) {
        return "ERROR"
    }

    let output = "";
    for (let i = 0; i < num; i++) {
        output += string;
    }

    return output;
};

// Do not edit below this line
module.exports = repeatString;
