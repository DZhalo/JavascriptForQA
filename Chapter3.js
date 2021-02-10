//Изощрённые дразнилки
let humanBodyParts = ["рот", "нос", "палец"]
let animalBodyParts = ["хвост", "пузо", "лапы"]
let adjectives = ["угарный", "унылый", "дурацкий"]
let animals = ["жабы", "выдры", "енота", "обезьяны", "черепахи"]

let humanBodyPart = humanBodyParts[Math.floor(Math.random() * 3)]
let animalBodyPart = animalBodyParts[Math.floor(Math.random() * 3)]
let adjective = adjectives[Math.floor(Math.random() * 3)]
let animal = animals[Math.floor(Math.random() * 5)]

let randomInsult = "У тебя " + humanBodyPart + " ещё более " + adjective + " чем " + animalBodyPart + " у " + animal + "!"
console.log(randomInsult)

//Вариант дразнилки через оператор join
let randomWordsArray = []
randomWordsArray.push("У тебя")
randomWordsArray.push(humanBodyPart)
randomWordsArray.push("ещё более")
randomWordsArray.push(animalBodyPart)
randomWordsArray.push("чем")
randomWordsArray.push(adjective)
randomWordsArray.push("у")
randomWordsArray.push(animal)

console.log(randomWordsArray.join(" ") + "!")

//Соединение массива чисел в строку с помощью join
console.log([3, 2, 1].join(" больше, чем "))