class Cake {
    constructor(flavor, icing, decoration) {
        this.flavor = flavor || none //now instead of undefined, it will return a "none" in flavor
        this.icing = icing
        this.decoration = decoration
        this.size = 8 //this is once we reference the size of cake
}

describe() {
    return `This cake is ${this.flavor} ${this.icing} ${this.decoration}`
}

eat(slice) { //setting up the value of taking away from the size (eating slice)
    this.size -= slice
    console.log(`You have taken ${slice} slices of ${this.flavor} cake`)
    }
}

console.log(choc, lemon, german)
const choc = new Cake("coffee and buttercream", "chocolante genache", "glaze")
const lemon = new Cake("...")
const german = new Cake("...")
lemon.eat(4) // this is an example of eating 4 slices of cake
console.log(lemon) // this is an example of having 4 slices left

const cheesecake =new Cake() //testing if values will be established in our list

// ! Cool benefit of && and || operators
console.log(0 || potato) // these are the same 
console.log(potato || 0)  // this is showing that "or" returns the first truthy value
console.log(0 && potato)//while && returns a falsey value
console.log(potato && 0)// so if we recieve an undefined flavor, it would return a falsey value
console.log(potato && potato2) // this is true/true and it returns a righthand side value


console.log(choc.decscribe())
console.log(lemon.describe())
console.log(german.describe())




// ! Notes from class are below

/* class Cake {
    constructor(flavor, icing = "none", decoration) {
        this.flavor = flavor || "none"
        this.icing = icing
        this.decoration = decoration
        this.size = 8
    }

    describe() {
        return ` This cake is: ${this.flavor} ${this.icing} ${this.decoration}`
    }

    eat(slice) {
        this.size -= slice
        console.log(`You have taken ${slice} slices of ${this.flavor} cake`)
    }
}

const opera = new Cake("coffee and buttercream", "chocolate ganache", "glaze")
const applePie = new Cake("apple", "crumbles", "lattice pattern")
const cheesecake = new Cake("cheese", null, "strawberry drizzle")

console.log(opera, applePie, cheesecake)
console.log(opera.describe())
console.log(applePie.describe())
console.log(cheesecake.describe())
cheesecake.eat(4)
console.log(cheesecake)

const germanChocolate = new Cake("coconut")
console.log(germanChocolate)

! Cool benefit of && and || logical operands
? || returns the first truthy value it finds
console.log("OR false/true", 0 || "potato")
console.log("OR true/false", "potato" || 0)
console.log("OR true/true", "potato" || true)

? && returns truthy right side value if both values are true; otherwise first falsey value
console.log("AND false/true", 0 && "potato")
console.log("AND true/false", "potato" && 0)
console.log("AND true/true", "potato1" && "potato2")
console.log("AND false/false", 0 && undefined) */