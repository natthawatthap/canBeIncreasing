function canBeIncreasing(nums: number[]): boolean {
  const n = nums.length;
  if (n <= 2) return true;

  let removalUsed = false;

  for (let i = 1; i < n; i++) {
    if (nums[i] <= nums[i - 1]) {
      if (removalUsed) return false;

      removalUsed = true;

      if (
        i > 1 &&
        nums[i] <= nums[i - 2] &&
        i + 1 < n &&
        nums[i + 1] <= nums[i - 1]
      ) {
        return false;
      }
    }
  }

  return true;
}

// Test cases
console.log(canBeIncreasing([1, 2, 10, 5, 7])); // Output: true
console.log(canBeIncreasing([2, 3, 1, 2])); // Output: false
console.log(canBeIncreasing([1, 1, 1])); // Output: false
