let favSongs = [
    "Real Slim Shady - Eminem",
    "I Dunno - Tion Wayne",
    "The Box - Boddy Rich"
]
favSongs[3] = "Killshot - Eminem"
console.log(favSongs)
favSongs.push ("Man Down - Aystar")
favSongs.push ("Audacity - Stromzy")
favSongs.pop(9)
console.log(favSongs)
let nums = [ 1, 2, 3, 4, 5]

let result = nums.map((num) => num * 2)
console.log(result)
let favMovies = [
    "Star Wars - Empire Strikes Back",
    "The Dark Knigt",
    "Lord of the Rings - Return of the King"
]

for(let i = 0; i < favMovies.length; i++)[
    console.log(favMovies[i])
]

for(let i = 0; i < 6; i++){
    console.log(Math.ceil(Math.random() * 50 ) )
}

let divisbleByTwo = []

for (let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        divisbleByTwo.push(i)
    }
}
console.log(divisbleByTwo)

let age = 19

while (age < 18) {
    console.log(`you're a child, you are $(age)`)
    age++
}
console.log("you are now an adult")
