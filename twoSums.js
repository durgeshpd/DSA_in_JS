/* 
// Brute Force Approch (O(n²))

function twoSums(nums) {
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
 */

// Optimized Approch (O(n))

function twoSums(nums, target) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(map.has(complement)) {
            return [map.get(complement), i];        
        }
        map.set(nums[i], i);
    }
    return [];
}

let nums = [2, 7, 11, 15];
target = 9;
console.log(twoSums(nums, target));