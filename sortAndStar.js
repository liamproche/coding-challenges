// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(arr) {
    let output = ""
    const sortedArr = arr.sort()
    for(char of sortedArr[0]){
        output += char + "***"
    }
    return output.slice(0, -3)
}

console.log(twoSort(""))

//define a variable to hold the output

//sort the arr and store it in a new vairable

//loop though the first str in the sorted arr
    //for each char add to the output + ***

//return the output slicing the last 3 characters 

//else (noinput) return ???

