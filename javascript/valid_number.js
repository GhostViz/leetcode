# https://leetcode.com/problems/valid-number/

var isNumber = function(s) {
    
    let regex = new RegExp(/^[+-]?(([0-9]+\.?[0-9]*)|(\.[0-9]+))([e][+-]?[0-9]+)?$/);
    let testString = s.trim();
    
    return regex.test(testString);
};
