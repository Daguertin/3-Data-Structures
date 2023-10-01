/* 
    ? Array Methods
    * methods are functions that live inside of an object prototype
    * denoted by the . at the end of an object we're working on
    * Ex: someVariable.toLowerCase()
    
*/

// try to memorize, shift, unshift, pop, push, at, sort, join, concat

let educationTeam = [
    [ "Paul", "Rob", "Eric"],
    ["Mary", "Henry"],
    ["lulu", "Julie"]
]

/* 
    ? .push()
        * adds an element to the end of an array
        * returns new length of an array
    ) */

    let pushReturn = educationTeam.push(["Benny"]) //value
    console.log(educationTeam) //return of push

    /* 
        ? .pop()
            * removes last array element
            * returns last array element */

        //educationTeam.pop (If array is empty, returns undefined)
        console.log(educationTeam.pop()) 
        console.log(educationTeam)

        let popReturn = educationTeam
        console.log("Value", educationTeam, "Return of Pop", popReturn)


/* 
    ? .unshift()
        * adds element to the beginning of an array
        * returns the length of an array */

    let unshiftReturn = educationTeam
    console.log("Value", educationTeam, "return of unshifted", unshiftReturn)

    /* 
    ? .shift()
        *removes the first element from an array
        * returns removed elemnt in an array
        * * if array is empty, it returns undefined
         */

        let shiftReturn = educationTeam
        console.log("Value", educationTeam, "Return of shift", shiftReturn)

        /*  
        ? .at()
            * takes integer (positive or negative for forward/backward count)
            * returns items at the index
             */
// this is helpful to count backwards in an array!
        console.log(educationTeam[0].at(-1))

        /* 
        ? .join()
            * creats and returns string joining all array elements using seperator */
console.log(educationTeam[0].join(" "))

    /*  
        ? .flat()
        * lists of array items including nested arrays
 */
// console.log(educationTeam.flat())
let flatEducation = educationTeam.flat()
console.log(flatEducation)

    /*  
        ? .sort() 
            * default order is ascending
            * mutates original array
            * sorts array elements
            */
let ascOrder = flatEducation.sort() //ascOrder is its default
console.log(flatEducation) //this is mutated
console.log(educationTeam) //this is still unmutated

/* 
    ? .concat()
        *merges seperate arrays
        */
let europeanCars = ["BMW", "Prosche", "Audi"]
let imports = ["Kia", "Subaru", "Toyota"]
let cars = europeanCars.concat(imports)
console.log("Euro only", europeanCars, "Imports only", imports, "All cars", cars)

/* 
    ? Array Destructuring
    * [...]
    * a way to unpack values from arrays, properties or objects
    */

    console.log(educationTeam)

    let destructuredEducation = [...educationteam[0], ...educationTeam[1], ...educationTeam[2]]
    console.log(destructuredEducation)

    // ? Advanced Array Methods

    let states = [
        "Illinois",
        "Wisconsin",
        "Alabama",
        "New York",
        "Vermont",
        "Indiana", 
        "Massachussets",
        "Ohio",
        "Virginia",
        "West Virginia",
        "Pennsylvania",
        "North Dakota",
        "South Dakota",
        "Oregon",
        "California",
        "Nevada",
        "Arizona",
        "New Mexico",
        "Florida",
        "Louisiana",
        "Texas",
        "New Hampshire",
        "Maine",
        "Rhode Island",
        "Alaska",
        "Connecticut",
        "Montana",
        "Nebraska",
        "Delaware",
        "Washington",
        "Iowa",
        "Kansas",
        "Oklahoma",
        "Michigan",
        "Minnesotta",
        "Kentucky",
        "Tennessee",
        "Idaho",
        "Utah",
        "Georgia",
        "Mississippi",
        "Missouri",
        "Colorado",
        "Delaware",
        "Hawaii",
        "Maryland",
        "North Carolina",
        "South Carolina",
        "New Jersey",
        "Wyoming"
    ]

console.log(states.length)

for (state of states){
    console.log(state)
}

/* 
    ? .forEach()
        * executes a callback function once for each item in and array
        * callback has three parameters
        * Value - the interator (1)
        * Index - of each interable (2)
        * Array - the entire array .forEach was called upon (3)
         */
                 //   1      2    3
    states.forEach((state, index, arr) => console.log(state, index, arr))
 
/* 
! Challenge
* create a variable start With A and initilize an empty array
* use .forEach()
* check if each state starts with letter a
* if it does, push it to the new array
*/

// states.forEach((state[0, 0], index) => console.log(state, index))

let startsWithA = []
let statesWithoutA = []

states.forEach(state => {
    state[0] === "A" ? startsWithA.push(state) : statesWithoutA.push(state)
})
console.log(startsWithA)
console.log("----------")
console.log(statesWithoutA)

//TODO : Reintroduce a duplicate state. Think algorithmically how you could find a duplicate
// I think check the states (with a length feature?), introduce pop(use an array of 1), push back in

/* 
    ? .map()
        *creates an array with elements resulting from the callback fx
         */

        let statesUpperCase = states.map(state => state.toUpperCase())
        console.log(statesUpperCase)

/* 
    ? .filter()
    * creates a new array based on the filter fx
    * only filtered items can be added to an array
    * cannot have (if/else) where "else" also gets added
     */

    let weHateA = states.filter( state => !state.toLowerCase().includes("a"))
    console.log(weHateA)
    // lowercased (a's to include all "a" values) 
    // if there are any "a" states, we do not want them (thus !)

    /* 
    ! Challenge
        * utilize one of the array methods to raise the grade by 15 points for everyone
        * but all those above 90 should not get any added points
        */
    let grades = [22, 57, 98, 72, 54, 81, 84, 3]

let newGrades = grades.map(grade => grade >= 90 ? grade : grade + 15)
console.log(newGrades)

    /* 
        ? .reduce()
            * calls callback on arr elements with calculation of preceeding element
            * Useful for things like a factorial problem
            * Start value is initialValue of [0] of an array on which it's called
             */

        // let numbers = [1, 2, 3, 4, 5, 6, 7]
        //  let initialValue = 0
        // let sum = numbers.reduce((prevValue, currValue) => prevValue + currValue))
        // console.log("HERE", sum)



        