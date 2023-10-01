/* 
? State Machines
    * system with finite and defined states
    * states are just information
    * the info is reliant upon logic in order to transition or be reassigned
    * alot of games use statemachines to define areas, etc.
*/

const states = {
    hi: "hawaii",
    vt: "vermont",
    Co: "colorado"
}

function lookupState(state) {
        // return states[state] returning state values for state
        return states[state] ? "state not found" : states[state] //return state otherwise return state not found
}

console.log(lookupState("vt"))
console.log(lookupState("co"))

function getPoemTitle(author) {
    const poemTitles = {
        "Robert Frost": "Stopping by Wood on Snowy Evening",
        "Shel Silverstoim": "Falling Up",
        "Sylvia Plath": ("The Bell Jar", "Lady Lazarus", "Tulips")
    }
    return poemTitles(author)
}

console.log(getPoemTitle("Sylvia Plath")) //listing off sylvia plath titles

//below we are defining the state that these lights will transition to
const light = {
    red: ("green", "yield"), //right hand side shows what they turn into
    yellow: ("red"),
    green: ("yellow"),
    yield: ("red"),
    yellowFlash: ("red"),
    redFlash: ("green")
}

let currentState = "red"

function changingState(newState) { 
    //if current is red and we want to transition into a new state, it will take 
    //that transition
    let availableStates = light(currentState)
    // return availableStates.includes(newState)
    console.log(availableStates)
}

changeState("green")

function changingState(newState) { //if current is red and we want to transition into a new state, it will take that transition
    let availableStates = light(currentState) //basically saying this is green and yeield
    return availableStates.includes(newState)
    ? (currentState = newState) && `light is now ${currentState}`
    //establising that a transition off of a state is not allowed above (using the && as a sneaky double truth, becareful with this technique)
    : `Transition from ${currentState} to ${newState} not allowed`
    
}


console.log(changeState("yellow"))

let  whereAmI = "in"

const stateLines = {
    in: ["il", "mo", "mi", "oh", "ky",],
    mo: ["in", "ok", "ks", "il", "ak", "ne", "tn"],
    il: ["in", "mi", "in", "mo"]
}

function whereCanIGo(newPlace) {
    const available = stateLines[whereAmI]
    return available.includes(newPlace)
    ? (whereAmI = newPlace) && `I'm now at ${whereAmI}`
    : `Transition from ${whereAmI} to ${newPlace} not allowed`
}

console.log(whereCanIGo("mo"))
console.log(whereCanIGo("in"))