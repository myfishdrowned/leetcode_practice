function twoSum(nums: number[], target: number): [number, number] | [] {
    const map: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (map.has(difference)) {
            return [map.get(difference) as number, i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 17;
console.log(twoSum(nums, target)); // Output: [0, 1]
