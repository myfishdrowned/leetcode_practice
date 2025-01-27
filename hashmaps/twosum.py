from collections import defaultdict
def twosum(nums, target):
      hashmap = defaultdict(int)
      for i, j in enumerate(nums):    
        difference = target - j
        if difference in hashmap:
            return [hashmap[difference], i]
        hashmap[j] = i
nums = [1, 2, 4, 5]
target = 6

print(twosum(nums, target))