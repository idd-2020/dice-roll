/* Problem A: Generate a random dice number between 1-6*/

/* Problem B: Modify the dicemsg <output> to show the roll number
    1. Find the .dicemsg element in the document
    2. Change the contents to show the number (You rolled: X)*/

    // const diceMsg = document.querySelector(`.dicemsg`)
    // diceMsg.textContent = `You rolled: 5`

/* Problem C: Modify the diceface <img> to show a new dice face 
    1. Find the .diceface element in the document
    2. Change the "src" attribute to an image with the number of the roll*/

    // const diceFace = document.querySelector(`.diceface`)
    // diceFace.setAttribute(`src`, `img/dice5.svg`)

/* Problem D: Make the button clickable to run Problems A-C */

const rollBtn = document.querySelector(`#rollBtn`)

function diceRolltoString(){
    var diceRoll = Math.floor(Math.random() * 6 + 1)
    return diceRoll 
}

rollBtn.addEventListener(`click`, event => {
    var diceRndm = diceRolltoString()
    const diceMsg = document.querySelector(`.dicemsg`)
    const diceFace = document.querySelector(`.diceface`)
    diceMsg.textContent = `You rolled: ${diceRndm}`
    diceFace.setAttribute(`src`, `img/dice${diceRndm}.svg`)
})












// function diceRolltoString(){
//     let diceRoll = Math.floor(Math.random() * 6 + 1)
//     return diceRoll 
// }

// let diceRollString = `You rolled: ${diceRollString()}`

// let diceRollImage =`img/dice${diceRollString()}.svg`

// let btnEle = document.getElementById(rollBtn)
// let diceLbl = document.getElementById(diceRollLabel)
// let diceImg = document.getElementById(diceRollImage)

// btnEle.addEventListener(`click`, event => {

// })


