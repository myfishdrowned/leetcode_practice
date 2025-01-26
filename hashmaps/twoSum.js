function twoSum(nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
// Example usage:
var nums = [2, 7, 11, 15];
var target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
