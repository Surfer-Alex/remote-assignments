function twoSum(nums, target) {
  const table = new Map();
  for (let i = 0; i < nums.length; i++) {
    const answer = target - nums[i];
    if (table.has(answer)) {
      return [table.get(answer), i]; //取得answer的index，跟當前的index，放進array做return
    }
    table.set(nums[i], i);
  }
  return "找不到捏!";
}

/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0] + nums[1] is 9
*/