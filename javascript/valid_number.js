/*
https://leetcode.com/problems/valid-number/

Validate if a given string can be interpreted as a decimal number.

Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one. However, here is a list of characters that can be in a valid decimal number:

    Numbers 0-9
    Exponent - "e"
    Positive/negative sign - "+"/"-"
    Decimal point - "."

Of course, the context of these characters also matters in the input.
*/
var isNumber = function(s) {
    // regex to check positive or negative with or without decimals and e or e-
    let regex = new RegExp(/^[+-]?(([0-9]+\.?[0-9]*)|(\.[0-9]+))([e][+-]?[0-9]+)?$/);
    // remove extra spaces
    let testString = s.trim();
    // regex.test returns true or false. 
    return regex.test(testString);
};
