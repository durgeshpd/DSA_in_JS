
// Approch 1: using hashmap Time and Space Complexity is (O(n))

function majorityElement(nums) {
    let map = new Map();
    let target = Math.floor(nums.length / 3);

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    let result = [];
    for (let [key, value] of map) {
        if (value > target) {
            result.push(key);
        }
    }
    return result;
}

let nums = [3, 2, 3];
console.log(majorityElement(nums));