//TODO - Make a function that sorts an array and deletes any duplicates.

//NOTE - duplicatesArray([1,2,3,3,4,5]) -> [1,2,3,4,5]

// function duplicatesArray(arr) {
//     const newArray = []

//     let currentArray = arr[0]
//     // if arr[i] does not equal the currentArray, then it will push that value to the newArray. (if it does equal, then it does not)
//     newArray.push(currentArray)
//     // set currentArray to the current arr element
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] !== currentArray) {
//             currentArray = arr[i]
//             newArray.push(currentArray)
//         }
//     }
//     //returns the new array value 
//     return newArray
// }

// console.log(duplicatesArray([1,2,3,3,4,5]))


//TODO - Develop a function the counts number (0)/s and in a 2D array.

//NOTE - twoArrays([0,0]),([0,1]) -> 3

// function twoArrays(arr) {
//     let num = 0

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             if (arr[i][j] === 0) {
//                 num++
//             }
//         }
//     }
//     return num
// }

// console.log(twoArrays([0,0],[0,0]))
    

//TODO - Write a function the returns the largest even number in an array.

//NOTE - evenLargestNumber([1,10,17]) -> 10
//NOTE - evenLargestNumber([1,3,5,7,9] -> "No even number"

// //How i did it
// function evenLargestNumber(arr) {
//     let num = 0

//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i]) % 2 == 0  {
//             return num 
//         }       
//     }
//     return "No even number"
// } 

//How it is done 
function evenLargestNumber(arr) {
    let benchmark = -1 

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            if(arr[i] > benchmark) {
                benchmark = arr[i]
            }
        }
    }
    return benchmark 
}

console.log(evenLargestNumber([1,2,3,4,5,10,1000]))