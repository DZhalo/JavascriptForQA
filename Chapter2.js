//Попробуйте сами: сколько купить воздушных шаров
let balloons = (15 + 9) * 2
console.log("My friend needs " + balloons + " balloons")

// операторы *=, .=
let balloons1 = 100
console.log(balloons1 *= 2)

let balloons2 = 100
console.log(balloons2 /= 4)

//превращаем "эЙ, кАК деЛа?" в "Эй, как дела?"
let str = "эЙ, кАК деЛа?"
console.log(str[0].toUpperCase() + str.slice(1).toLowerCase())

//пускать ли юного зрителя в кино 12+
let age = 11
let accompanied = true
if (age >= 12 || accompanied){
    console.log("Проходите!")
} else{
    console.log("К сожалению, Вам нельз на этот фильм")
}