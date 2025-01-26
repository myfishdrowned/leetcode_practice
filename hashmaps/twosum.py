def twosum(nums, target):
      for i, j in enumerate(nums):    
        difference = target - i
        if difference in hashmap:
            return [hashmap[difference], i]
        hashmap[difference] = i
nums = [1, 2, 4, 5]
target = 9