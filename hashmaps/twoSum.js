function twoSum(nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var difference = target - nums[i];
        if (map.has(difference)) {
            return [map.get(difference), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
// Example usage:
var nums = [2, 7, 11, 15];
var target = 17;
console.log(twoSum(nums, target)); // Output: [0, 1]
