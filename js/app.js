//variables
let deck1 = []
let deck2 = []
let cardToRemove

//cached element refs
let deck1El = document.querySelector('#deck-1')
let deck2El = document.querySelector('#deck-2')
let btnEl = document.querySelector('button')




// Functions
// Initialize deck 1 with array of 52 cards
const init = () => {
    deck1 = ["dA", "dQ", "dK", "dJ", "d10", "d09", "d08", "d07", "d06", "d05", "d04", "d03", "d02", "hA", "hQ", "hK", "hJ", "h10", "h09", "h08", "h07", "h06", "h05", "h04", "h03", "h02", "cA", "cQ", "cK", "cJ", "c10", "c09", "c08", "c07", "c06", "c05", "c04", "c03", "c02", "sA", "sQ", "sK", "sJ", "s10", "s09", "s08", "s07", "s06", "s05", "s04", "s03", "s02"]
}
// invoke the function


// Function to handle a button click:
const handleClick = () => {
    if (deck1.length > 0) {
        // Randomly select number from total cards remaining
        let randomCard = Math.floor((Math.random() * deck1.length))
        // Assign card with the random index to a variable
        let drawCard = deck1.splice(randomCard, 1)[0]
        // Add card picked to deck 2
        deck2.push(drawCard)
        // Pass card picked to render function to display
        render(drawCard)
    }
}
init()

const render = (drawCard) => {
    if (deck2.length === 1) {
        deck2El.classList.remove('outline')
    }
    deck2El.classList.add(drawCard)
    if (deck2.length > 1) {
        deck2El.classList.remove(cardToRemove)
    }
    cardToRemove = drawCard

    if (deck2.length === 26) {
        deck2El.classList.add("shadow")
        deck1El.classList.remove('shadow')
    }

    if (deck1.length === 0) {
        deck1El.classList.add('outline')
        deck1El.classList.remove('black-blue')
    }
}

//Event listeners
btnEl.addEventListener('click', handleClick)