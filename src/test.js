const readline = require('readline') //grabs the readline library 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let playerOne = ''
let playerTwo = ''

const game = ['rock', 'paper', 'scissors']


rl.question("Player One turn: ", (player) => {
    if(!game.includes(player)) {
        console.log("Please enter rock, paper or scissors.")
        rl.close()
    } else {
        playerOne = player
        rl.question("Player Two turn: ", (player) => {
            if(!game.includes(player)) {
                console.log('Check and test')
                rl.close()
            } else {
                playerTwo = player

                if (playerOne === playerTwo) {
                    console.log('It is a tie')
                } else if (
                    (playerOne === 'rock' && playerTwo === "scissors") ||
                    (playerOne === 'scissors' && playerTwo === "paper") ||
                    (playerOne === 'paper' && playerTwo === 'rock') 
                ) {
                    console.log('Player One wins')
                } else {
                    console.log('Player Two wins')
                }
            }

        })
    }
})

// rl.question("Player Two turn: ", (player) => {
//     playerOne = player
//     if(!game.includes(player)) {
//         console.log("Please enter rock, paper or scissors.") 
//         rl.close()
//     }
// })

//TODO - if statement 
