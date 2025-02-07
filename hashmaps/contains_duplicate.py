from collections import defaultdict
def contains_duplicate(nums):
    hashmap = defaultdict(int)
    for j in nums:
        if hashmap[j] > 0:
            return True
        hashmap[j] += 1
    return False

nums = [1,2,3,4]
print(contains_duplicate(nums))
