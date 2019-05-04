function pipeFix (numbers) {
  let result = [];
  for (let i = numbers[0]; i <= numbers[numbers.length-1]; i += 1) result.push(i)
  return result
}

//clever
let pipeFix = nums => Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);
