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

let dinosaurs = [
    { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
    { name: "Stegosaurus", period: "Late Jurassic" },
    { name: "Plateosaurus", period: "Triassic" }
];

console.log(dinosaurs[0].name)

let anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
console.log(anna.luckyNumbers[1])

class Dog {
    constructor(name, color, sound) {
        this.name = name
        this.color = color
        this.sound = sound
    }
    sound() {
        console.log("Woof!")
    }
}

const dog1 = new Dog("Romeo", "black", "Woof!")
console.log(dog1.sound)

let myCrazyObject = {
    name: "A ridiculous object",
    some_array: [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    random_animal: "Banana Shark"
};

console.log(myCrazyObject.some_array[2].number)

if ("Meleyotan") {
    console.log("I am true")
}
else {
    console.log("I am false")
}

let names = "Nicholas";
console.log("Hello " + names);
if (names.length > 7) {
    console.log("Wow, you have a REALLY long names!");
}

let lemonChicken = false;
let beefWithBlackBean = true;
let sweetAndSourPork = true;
if (lemonChicken) {
    console.log("Great! I'm having lemon chicken!");
} else if (beefWithBlackBean) {
    console.log("I'm having the beef.");
} else if (sweetAndSourPork) {
    console.log("OK, I'll have the pork.");
} else {
    console.log("Well, I guess I'll have rice then!")
}

let general_name = "Oyeyemi"
let my_name = "Meleyotan"
let dads_name = "Oyeyemi"
let moms_name = "Oluwakemi"

if (general_name == my_name) {
    console.log("Hello me!")
}
else if (general_name == dads_name) {
    console.log("Hi Dad!")
}
else {
    console.log("Hello Stranger!")
}

let sheepCounted = 0
while (sheepCounted < 10) {
    console.log("I have counted", sheepCounted, "sheeps!")
    sheepCounted++
}
console.log("zzzzzzzzzzzz")

for (let i = 0; i < 10; i++) {
    console.log("I have counted", sheepCounted, "sheeps!")
}
console.log("Zzzzzzzzzzzzzzz")

let start = 3
while (start < 10) {
    console.log(start)
    start += 3
}

for (j = 3; j < 10; j++) {
    if (j % 3 == 0) {
        console.log(j)
    }
}


let animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
let awesome_animals = []
for (let animal of animals) {
    awesome_animals.push("Awesome", animal)
}
console.log(awesome_animals)

console.log(animals.map((element) => {
    return ("Awesome" + element)
}))


/**
 * #2: Random String Generator
Make a random string generator. You’ll need to start with a
string containing all the letters in the alphabet:
var alphabet = "abcdefghijklmnopqrstuvwxyz";
To pick a random letter from this string, you can
update the code we used for the random insult generator in
Chapter 3: Math.floor(Math.random() * alphabet.length). This
will create a random index into the string. You can then use
square brackets to get the character at that index.
(continued)
104 Chapter 6
To create the random string, start with an empty string
(var randomString = ""). Then, create a while loop that will
continually add new random letters to this string, as long
as the string length is less than 6 (or any length you choose).
You could use the += operator to add a new letter to the end
of the string. After the loop
 */

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var string = ""
while (string.length < 7){
    let random_letter = alphabet[Math.floor(Math.random() * alphabet.length)]
    string += random_letter
}


/**
 * 3: h4ck3r sp34k
Turn text into h4ck3r sp34k! A lot of people on the Internet
like to replace certain letters with numbers that look like
those letters. Some numbers that look like letters are 4 for
A, 3 for E, 1 for I, and 0 for O. Even though the numbers look
more like capital letters, we’ll be replacing the lowercase
versions of those letters. To change normal text to h4ck3r
sp34k, we’ll need an input string and a new empty string:
var input = "javascript is awesome";
var output = "";
You’ll then need to use a for loop to go through all the
letters of the input string. If the letter is "a", add a "4" to the
output string. If it’s "e", add a "3". If it’s "i", add a "1", and
if it’s "o", add a "0". Otherwise, just add the original letter
to the new string. As before, you can use += to add each new
letter to the output string.
After the loop, log the output string to the console. If it
works correctly, you should see it log "j4v4scr1pt 1s 4w3s0m3".
 */

let input = "javascript is awesome"
let output = ""

let encoding = { a: 4, e: 3, i: 1, o: 0 }
for (let letter of input) {
    if (letter == "a") {
        output = output + "4"
    }
    else if (letter == "e") {
        output = output + "3"
    }
    else if (letter == "i") {
        output = output + "1"
    }
    else if (letter == "o") {
        output = output + "0"
    }
    else {
        output = output + letter
    }
}
console.log(output)

// Hangman Game
correct_guess = new Array()

//Pick a random correct word from an array 
let arr_of_words = ["ape", "moon", "sky", "blue", "ballon"]
correct_word = arr_of_words[Math.floor(Math.random() * arr_of_words.length)]

for (let i = 0; i < correct_word.length; i++) {
    correct_guess[i] = "_"
}

console.log(correct_guess)

//Keep prompting until correct guess matches correct word
while (correct_guess.join("") != correct_word){
    let guessed_letter = prompt("Guess a letter")
    if (correct_word.includes(guessed_letter)) {
        correct_letter = guessed_letter
        let index_of_correct_letter = correct_word.indexOf(correct_letter)
        correct_guess[index_of_correct_letter] = correct_letter
        console.log("Good! Current guess: " + correct_guess.join(""))
    }
    else{
        console.log("Try again")
    }
}