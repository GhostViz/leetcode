// https://leetcode.com/problems/trapping-rain-water/

var trap = function(height) {
    let result = 0;

    let leftMax = 0;
    let rightMax = 0;

    low = 0;
    high = height.length - 1;

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
