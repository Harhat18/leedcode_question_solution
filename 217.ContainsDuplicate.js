// 217. Contains Duplicate
// Easy

// Companies
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

var containsDuplicate = function (nums) {
  nums.sort();
  return hasDuplipcate(nums);
};

const hasDuplipcate = (nums) => {
  for (let i = 0; i < nums.leght - 1; i++) {
    const nextValue = i + 1;
    const isNextDuplicate = nums[i] === nums[nextValue];
    if (isNextDuplicate) return true;
  }
  return false;
};

containsDuplicate();
