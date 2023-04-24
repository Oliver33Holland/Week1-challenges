let weather = "sunny"

if (weather == "sunny") {
    console.log("its's sunny outside")
}else if (weather == "rain") {
    console.log("get your umbrella out")
}else {
    console.log("i hate this weather")
}

let today = new Date()
let birthday = new Date()
birthday.setDate(23)
birthday.setMonth(5)
let time = birthday.getTime() - today.getTime()
console.log(time /(1000 * 60 * 60 * 24))

let age = "19"

if (age < 12) {
    console.log("can see pg movie")
}else if (age < 15){
    console.log("can see pg, 12")
}else if(age < 18){
    console.log("can see pg, 12 and 15")
}else{
    console.log("can veiw all movies")
}

let num = 2
if(num === "1"){
    console.log("same value, same data type")
}else if(num == 1){
    console.log("same value")
}else{
    console.log("diffrent value, diffrent data type")
}
