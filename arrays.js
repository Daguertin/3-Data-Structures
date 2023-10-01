/* 
    ? Array
    * List-Like object
    * reference data type
    * denoted by [ ]
    * it can hold multiple data-types (string, boolean etc)
    * content can be accessed by the arrays index
*/

// ? Array creation using array literal

let arr = []
console.log(arr)
// console.log(Boolean(arr)) Empty arrays return true

//  ? How would we check if an array is empty?

!arr ? console.log("Not Empty") : console.log("Empty")
// !Wrong returns "not empty" because array ALWAYS returns true

arr.length === 0 ? console.log("Empty") : console.log("Not empty")

arr[0] ? console.log("Not empty") : console.log("Empty")

let carMake = ["BMW", "Porche", "Maserati", "Pagani"]
console.log(carMake) // displays all contents of an arry
console.log(carMake[1]) //displays value at an index of 1 (Porsche)
console.log(carMake[7]) // if not found, returns undefined

// ? Nesting, Assignment, & Reassignment

// Assign
carMake[4] = "Ferrari"
console.log(carMake) 
// or
// carMake.push("fireball")
// console.log(carMake)

// If you had figuring out how many items were in the index, how would you find out?
carMake[carMake.length] = "Aston Martin"
console.log(carMake) //added an astonmartin to an previously unknown list count

// Assign index to a different value
let bmw = carMake[0] //Gives a value to the index of 0
console.log(bmw) //So if you wanted say car with blue and white logo it would = BMW (You assigned a value) 

// Reassigning Values
carMake[0] = "Yugo" // carMake shows the location of 0(bmw) and changes its value to "Yugo"
console.log(carMake)

// Nesting
carMake[carMake.length] = ["Toyota", "Honda", "Subaru"]
console.log(carMake[6][2]) // To select subaru, cound to it (6) and then within the array of subaru by itself (2)
// This creates an additional array inside of an array
// Remember index will always be 1 less than count.. and count will be 1 more than index

console.log(carMake[1][0]) //this would select an individual letter (The "P" in Porche)

// ? Arrays can have many different data types

// let manyDataTypes = [
//     "string",
//     [1, 3 , 6, true, "some other string"],
//     false,
//     undefined,
//     null,
//     true,
//     function,
//     NaN,
//     "another string"
// ]

console.log(manyDataTypes)

// ? Data Type
console.log(typeof manyDataTypes)
// returns object due to JS' OOP nature

// ? How can we check if this is an array?
// Check if data type is an array
console.log(manyDataTypes instanceof Array)

// This is array creation using Array constructor
// Not an Array using Array Literal
let newArr = new Array("milk", "cookies", "stuff")
console.log(newArr)


/* 
    ! Challange
    * create a variable name sepCohort
    * include names of several of your peers (4 min)
    * nest an array with an instructor names (Paul, Henry, Mary)
    * access Mary's name and reassign to potato
    * access Pauls name and reassign to headpotato
    * ! Spicey Mode
    * remove the last entry within the nested array */

// ! The count is off, why? Didnt include .length to verify legnth value
// ! So it looks as though you would count the length of the first array[] and then the second position
let sepCohort = ["Julia", "Daniel", "Isiah", "Brandon"]
console.log(sepCohort)
sepCohort["Paul", "Mary", "Henry"]
console.log(sepCohort)
sepCohort[6][2] = "potato"
sepCohort[5][0] = "head potato"
console.log(sepCohort)
.splice ()

// sepCohort[][sepCohort[].length - 1] = null (removes name)





