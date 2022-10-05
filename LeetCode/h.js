// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

let  height = [1,8,6,2,5,4,8,3,7];

let maxarea = 0;
for (let i = 0; i < height.length; i++) {
    for (let right = i + 1; right < height.length; right++) {
        let width = right - i;
        maxarea = Math.max(maxarea, Math.min(height[i], height[right]) * width);
    }
}
return maxarea;
console.log(maxarea)