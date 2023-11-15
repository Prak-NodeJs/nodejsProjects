// // swap

// let a = 2;
// let b = 4;
// let temp = a;
// a = b
// b = temp
// console.log(a, b)

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let n = nums.length;
    k = k % n
    reverse(nums, 0, n - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, n - 1)


    return nums

};

var reverse = function (nums, start, end) {
    while (start <= end) {
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp

        start++
        end--
    }

}


console.log(rotate([1, 2, 3, 4, 5, 6, 7]))

