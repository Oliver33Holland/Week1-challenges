let cards = ["spade", "heart", "clubs", "diamond"]
let currentCard = "clubs"

while (currentCard !== "spade"){
    console.log(`card selected ${currentCard}`)
    currentCard = cards[Math.floor(Math.random() * 4)]
}
console.log(currentCard)