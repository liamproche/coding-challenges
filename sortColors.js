// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

const sortColors = (nums) => {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            nums.splice(i, 1)
            nums.unshift(0)
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 2){
            nums.splice(i, 1)
            nums.push(2)
            i--
        }
    }
    return nums
};

console.log(sortColors([2,0,2,1,1,0]))

//define an empty arr for red

//define an empty arr for white

//define an empty arr for blue

//loop through nums using a for of loop

//if num === 0, red.push(0)

//else if nums === 1, white.push(1)

//else if nums === 2, blue.push(2)

//use a for loop to iterate through white pushing 1 into red

//use a for loop to iterate through blue pushing 2 into red

//return red