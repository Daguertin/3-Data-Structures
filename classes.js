/* 
    ? Classes
        * templates or blueprints for creating objects
        * they encapsulate data with code
        * JS is a prototype-based language with access to OOP principles
        * Classes are considered special functions. They can be defined as:
            * class declarations
            * class expressions
            ! Neither are HOISTED
            (hoisted means they can be invoked before they are declared)
            
            sayhi()  * this would be a hoisted function
            function sayhi() {
                console.log("hi")
            }
*/
// .this keeps it in the scope (in case of below, in scope of constructor)

// ? Class Declaration

class learner {
    constructor(name, city, cohort) {
        this.name = name
        this.city = city
        this.cohort = cohort
        this.scholarships = 2000 //this will be used but not in constructor
    }
}

// ? Create a new instance of a Learner class
const khale = new learner("Khale", "Brownsville", "sdb-sep-23")
console.log(khale)

// ? Prototype Chaining
console.log(typeof khale); // it will return an object
console.log(khale instanceof learner); //returns true
console.log(learner instanceof Object); //returns true
console.log(khale instanceof Object) //also returns true
// This is because...
// khale was created through learner, and learner through object constructor

// ? Accessing object instance of values
console.log(Khale.scholarships)

// ? Class Expression

const House = class {
    constructor(address, bedrooms, bathroooms) {
        this.address = address
        this.bedrooms = bedrooms
        this.bathroooms = bathroooms
    }
}

let $10070OrangeSt = new House("1007 Orange St", 3, 2,)
console.log($10070OrangeSt)







