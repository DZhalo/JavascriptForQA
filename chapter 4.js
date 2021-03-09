//Упражнение 1. Подсчёт очков
let scores = {
    Anna: 0,
    John: 0
}

scores["Anna"] += 1000
scores.John += 100

console.log(scores)

//Упражнение 2. Вглубь обьектов и массивов
let myCrazyObject = {
    name: "Нелепый обьект",
    "some array": [7, 9, {purpose: "путаница", number: 123}, 3.3],
    "random animal": "Банановая акула"
}

console.log(myCrazyObject["some array"][2].number)