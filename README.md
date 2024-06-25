npm init -y
npm install typescript --save-dev
npx tsc --init
npx tsc file_name.ts
node file_name.js

npx tsc --watch
npm install ts-node --save-dev
npx ts-node file_name.ts

Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise. If the array is already strictly increasing, return true.
The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length). 

Example 1
Input: nums = [1,2,10,5,7] Output: true
Example 2
Input: nums = [2,3,1,2] Output: false
Example 3
Input: nums = [1,1,1] Output: false