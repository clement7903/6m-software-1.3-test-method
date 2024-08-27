// Declaring an empty array
let empty = [];

// Initializing array with default values
let defaults = [1, 2, "3"]; // some programming languages do not allow mixed type.
console.log("defaults", defaults);

// Retrieve the first element in array
console.log("first element value is", defaults[0]);

// Looping an array
for (let i = 0; i < defaults.length; i++) {
    console.log("value of i is", i, "and the value is", defaults[i]);
}

/*Class discussion
Array methods:
Break out into groups and research how each of the array methods can be used and give an example.
    1. push
    2. pop
    3. shift
    4. unshift
    5. splice
    6. slice
*/
console.log("=========== Array Methods ================")

function pushMethod() {
    console.log("\n=========== Array Methods - Push ================")
    let testArray = []
    console.log("Initial Array: ", testArray)
    testArray.push("a")
    testArray.push("b")
    testArray.push("c")
    console.log("After pushing: ", testArray)
}
pushMethod()

function popMethod() {
    console.log("\n=========== Array Methods - pop ================")
    let testArray = ['a', 'b', 'c']
    console.log("Initial Array: ", testArray)
    let poppedItem = testArray.pop()
    console.log("After poping, the item is: ", poppedItem)
    console.log("After poping, the array is: ", testArray)
}
popMethod()

function shiftMethod() {
    // delete elements from the start of the array
    console.log("\n=========== Array Methods - shift ================")
    let testArray = ['a', 'b', 'c']
    console.log("Initial Array: ", testArray)
    let shiftedItem = testArray.shift()
    console.log("After shifting, the item is: ", shiftedItem)
    console.log("After shifting, the array is: ", testArray)
}
shiftMethod()

function unshiftMethod() {
    // inserts new elements at the start of the array
    console.log("\n=========== Array Methods - unshift ================")
    let testArray = ['a', 'b', 'c']
    console.log("Initial Array: ", testArray)
    testArray.unshift('newItem')
    console.log("After unshifting, the array is: ", testArray)
}
unshiftMethod()

function spliceMethod() {
    // removes elements from an array from a starting index
    console.log("\n=========== Array Methods - splice ================")
    let testArray = ['a', 'b', 'c']
    console.log("Initial Array: ", testArray)
    deletedItems = testArray.splice(1, 2)
    console.log("After splicing, the array is: ", deletedItems)
    console.log("After splicing, the array is: ", testArray)
}
spliceMethod()

function sliceMethod() {
    // returns a copy of a section of an array
    console.log("\n=========== Array Methods - slice ================")
    let testArray = ['a', 'b', 'c']
    console.log("Initial Array: ", testArray)
    slicedArray = testArray.slice(0, 2)
    console.log("After slicing, the slice is: ", slicedArray)
    console.log("After slicing, the old is: ", testArray)
}
sliceMethod()

//Exercise:
/*
Question 1:
1. Create an array called "grades" with 5 numeric values
2. Use a for loop to loop through the array to get the average of the values.

Question 2:
1. Use array methods to combine the two arrays and remove all even-indexed values
const arr1 = [15, 12, 11, 29, 5];
const arr2 = [13, 2, 6, 7];
*/


const grades = [10, 20, 30, 40, 50] 
let total = 0
for (let i = 0; i < grades.length; i++) {
    total += grades[i]
}
console.log("Average of grades: ", total/grades.length)

const arr1 = [15, 12, 11, 29, 5];
const arr2 = [13, 2, 6, 7];
let combinedArray = arr1.concat(arr2)
let oddIndexArray = combinedArray.filter((value, index) => index % 2 !== 0)
console.log("Combined Array: ", combinedArray)
console.log("Array with odd indexes: ", oddIndexArray)