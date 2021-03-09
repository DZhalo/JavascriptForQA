//программа, которая здоровается с твоей семьёй
const myName = "Daria"
const myMomName = "Natalie"
const myDadName = "Oleg"

const name = "John"

if (name === myName) {
    console.log("Привет мне!")
} else if (name === myMomName){
    console.log("Привет, мам!")
} else if (name === myDadName){
    console.log("Привет, пап!")
} else {
    console.log("Привет, незнакомец!")
}

//цикл for для печати степеней тройки < 10000
for (let i = 3; i < 10000; i *= 3) {
    console.log(i)
}

//цикл while для печати степеней тройки < 10000
let j = 3

while (j < 10000) {
    console.log(j)
    j *= 3
}

//#1. Прекрасные животные
let animals = ["cat", "lion", "horse", "bear"]

for (let i = 0; i < animals.length; i++){
    animals[i] = animals[i] + " - beautiful creature!"
}

console.log(animals)


//#2. Генератор случайных строк
const alphabet = "абвгдеёжзиклмнопрстуфхцчшщъыьэюя"
let randomString = ""

while (randomString.length < 9) {
    randomString += alphabet[Math.floor(Math.random() *  alphabet.length)]
}
console.log("Random string: ", randomString)

//#3. h4ck3r sp34k
let input = "javascript is awesome"
let output = ""

for (let i = 0; i < input.length; i++){
    if (input[i] === "a") {
        output += "4"
    } else if (input[i] === "e") {
        output += "3"
    } else if (input[i] === "i") {
        output += "1"
    } else if (input[i] === "o") {
        output += "0"
    } else {
        output += input[i]
    }
}

console.log("Encrypted message: ", output)
