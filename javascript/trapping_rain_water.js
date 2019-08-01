/*
https://leetcode.com/problems/trapping-rain-water/

Given n non-negative integers representing an elevation
map where the width of each bar is 1, compute how much water it is able to trap after raining.
*/

var trap = function(height) {
    let result = 0;

    let leftMax = 0;
    let rightMax = 0;

    low = 0;
    high = height.length - 1;

    // continue looping while the low is less than or equal to the high
    // if the height at the low element is less than the height at the high element
    // check if the low height is greater than left max. If it is make that the new
    // left max. If it isn't add the max minut the height low to result and increment
    // low by 1.
    // if height at the low element is not greater then height at the high element
    // check if height at the high element is greater than right max. if it is higher
    // add right max minus the height high to result. Decrement high by 1.
    while (low <= high){
      if (height[low] < height[high]) {
        if (height[low] > leftMax) {
          leftMax = height[low];
        } else {
          result += leftMax - height[low];
        }
        low += 1;
      } else {
        if (height[high] > rightMax){
          rightMax = height[high];
        } else {
          result += rightMax - height[high];
        }
        high -= 1;
      }
    }
    return result;
};
