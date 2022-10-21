const num = []
for(i = 0; i < 100; ++i){
    num[i] = i + 1
}

// console.log(num)

// Creating Arrays from Strings
// Arrays can be created as the result of calling the split() function on a string. This
// function breaks up a string at a common delimiter, such as a space for each word, and
// creates an array consisting of the individual parts of the string.

// let words = "i am henry nnebedum";
// let resultWord = words.split(" ")

// for( i = 0; i < resultWord.length; ++i){
//     console.log("name",`${i}`,resultWord[i])
// }

// SEARCHING FOR A VALUE USING INDEXoF()
let names = ["eze","henry","chikamso","nnebedum"]
function searchNames(name){
    let position = names.indexOf(name)
    if(position >= 0){
        return `${name} found at position ${position}`
    }else{
        return  `${name} not found`
    }
}

const answer = searchNames("chkamso")
// console.log(answer)


// Creating New Arrays from Existing Arrays

// There are two accessor functions that allow you create new arrays from existing arrays:
// concat() and splice().The splice() function allows you to create a new array
// from a subset of an existing array.

let person = ["eze","henry","chikamso","nnebedum","nnebedum","nnebedum"]
const res = person.splice(1,4,"whalze")
// console.log(res)




// MUTUATOR FUNCTIONS//
// JavaScript has a set of mutator functions that allow you to modify the contents of an
// array without referencing the individual elements. These functions often make hard
// techniques easy, as you’ll see below.
// ******Adding Elements to an Array//**** */
// There are two mutator functions for adding elements to an array: push() and unshift(). 
// The push() function adds an element to the end of an array:

//unshift() hard coded **
// let numbers = [1,2,3,4,5]

// let newNumber = 1;
// let N = numbers.length;
// for(i = N ; i >= 0; --i){
//     numbers[i] = numbers[i -1]
// }
// numbers[0] = newNumber;
// console.log(numbers)


// push()hard coded **
// let numbers = [1,2,3,4,5]

// let newNumber = 6;
// let N = numbers.length;
// for(let i = 0 ; i >= N; i++){
//     numbers[i] = numbers[i -1]
// }
// numbers[N] = newNumber;

// console.log(numbers)


/// **** Adding and removing element from the middle of an array ****///
// splice() 
// To add elements to an array using splice(), you have to provide the following arguments:
// • The starting index (where you want to begin adding elements)
// • The number of elements to remove (0 when you are adding elements)
// • The elements you want to add to the array

// let numb = [1,2,3,4,5,8,9,10]
// let newNumb = [6,7]
// numb.splice(5,3,newNumb)
// console.log(numb)

//***** Putting Array Elements in Order*****
// reverse()
//sort()
//NOTE;The sort() function uses the compare() function to sort the array elements numerically rather than lexicographically

// let numb = [2,3,4,33,4,55,6]

// numb.sort(function(a,b){
//     if(a >  b){
//         return 1
//     }else{ 
//         return -1
//     }
// })
// console.log(numb)


//ITERATOR FUNCTION
// These functions apply
// a function to each element of an array, either returning a value, a set of values, or a new
// array after applying the function to each element of an array.

//(1)Non–Array-Generating Iterator Functions
// The first group of iterator functions we’ll discuss do not generate a new array; instead,
// they either perform an operation on each element of an array or generate a single value
// from an array.
//forEach()***
//every()***: function, every(), applies a Boolean function to an array and returns true if the function can return true for every element in the array.

// let numb = [2,4,6,4,50,6]
// function isEven(numb){
//     return numb % 2 == 0
// }
// let rest = numb.every(isEven)
// console.log(rest)


//(2)Iterator Functions That Return a New Array
// There are two iterator functions that return new arrays: map() and filter(). The map()
// function works like the forEach() function, applying a function to each element of an
// array. The difference between the two functions is that map() returns a new array with the results of the function application.

//'MULTIDIMENSIONAL ARRAYS'
// JavaScript arrays are only one-dimensional, but you can create multidimensional arrays
// by creating arrays of arrays. In this section we’ll describe how to create two-dimensional arrays in JavaScript.

// jagged array** 
// is an example of multidimentional array

