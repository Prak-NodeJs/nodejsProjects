// 26. Remove Duplicates from Sorted Array
// Easy
// 13.1K
// 17.3K
// Companies
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.4


function removeDubplicate(nums) {
    let count = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[count] = nums[i]
            count++
        }
    }
    return count
}


function removeDubplicate2(nums) {
    let count = []
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] !== nums[i - 1]) {
            count.push(nums[i])
        }
    }
    return count
}


console.log(removeDubplicate2([1, 2, 2, 3]))