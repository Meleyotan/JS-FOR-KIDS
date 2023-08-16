//Write a function that prints a catface the number of times you want

const printCatface = (howmany) => {
    function innerFunction() {
        for (i = 0; i < howmany; i++) {
            console.log(i + "=.^^.=")
        }
    }
    return innerFunction
}

const result = printCatface(10)
result()


let age = 39
age = 15
age = 34
console.log(age)

//How many seconds old am I?

function secondsOld(age) {
    //calculate based on leap year
    //assume year 0 is a leap year
    //if year is zero or multiple of 4, no of days is 366
    //if year is greater than 1 or not divisible by 4, 365days, 6hours
    let seconds = 60
    let minute = 60
    let hour = 24
    let days = 365
    let secondsold = age * days * hour * minute * seconds
    return secondsold
}


console.log(secondsOld(1))

let ballons = 100
ballons *= 2
console.log(ballons)

let sillyString = "hELlo THERE, hOW ARE yOu doINg?";
let lowerCase = sillyString.toLowerCase()
let firstLetter = lowerCase[0].toUpperCase()
lowerCase = lowerCase.slice(1)
let correctString = firstLetter + lowerCase
console.log(correctString)



const array = [{ name: "Meleyotan", age: "21" }, 10, [1, 2, 3, 4, 5], "May", "June", "September"]
console.log(array.shift())
console.log(array.unshift())
console.log(array)
array.shift()
console.log(array)

let landmarks = []
landmarks.push("My house")
landmarks.push("Front path");
landmarks.push("Flickering streetlamp");
landmarks.push("Leaky fire hydrant");
landmarks.push("Fire station");
landmarks.push("Cat rescue center");
landmarks.push("My old school");
landmarks.push("My friend's house");

console.log(landmarks)

function reverseLandmark() {
    let wayback = []
    for (i = 0; i < landmarks.length; i++) {
        way = landmarks.pop()
        wayback.push(way)
    }
    return wayback
}

console.log(reverseLandmark())

console.log(Math.floor(Math.random() * 5))

let randomWords = ["Emilley", "Spicey", "Ice", "Molly", "Brett"]
let randomIndex = Math.floor(Math.random() * randomWords.length)
console.log(randomWords[randomIndex])

let randomNames = ["Stinky", "PoopNose", "Smelly", "Rat", "Smegol"]
let randomAdjective = ["fool", "nerd", "schmuck", "loghead"]

let randomInsults = ["You", "are", "a", randomNames[Math.floor(Math.random() * randomNames.length)], randomAdjective[Math.floor(Math.random() * randomAdjective.length)] + "!!!"].join(" ")
console.log(randomInsults)

const objects = { name: "Meleyotan", school: "LAUTECH", level: 500 }
for (key in objects) { 
    console.log(objects[key])
}

console.log(Object.keys(objects))
console.log(Object.values(objects))
