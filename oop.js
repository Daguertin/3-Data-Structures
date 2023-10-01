// look at OOP slides

/* 
    ? Object Oriented Programming (OOP) 
    
    ? APIE (memorize!)
        * Abstraction
            * obfuscation of implementation details
        * Poylmorphism
            * ability of using same constructor for different object instances
        * Inheritance
            * sharing of methods and properties
        * Encapsulation
            * dealing with scope (encapsulating data)
    */

    // ? Abstraction
    // create an array and push values as an example of abstraction
    // push is examples of abstraction
    
    let process = require("process")
    process.stdout.write("Exmaple of NO Abstraction")
    console.log("Example of abstraction")
    
// ? Polymorphism (Think different... but the same. A morph of multiples)
// build a class and show two instances of the class (differnet values)

class Human {
    constructor(name) {
        this.name = name
        this.species = "Human"
    }

    eat() {
        return `${this.name} likes good food`
    }
}
const brandon = new Human("Brandon")
const julia = new Human("Julia")

// ? Inheritance
// Use something from a parent class

class Teacher extends Human {
    constructor(name) {
        super(name)
        this.profession = "Teacher"
    }
}

const paul = new Teacher
console.log(paul.eat())

// ? Encapsulation
// use something that is out of scope

function brandonsHouse() {
const brandonsInheritance = " 1976 porche 911"
}
brandonsHouse()

// console.log(brandonsInheritance) // ReferenceError =>