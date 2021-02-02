// variables
let diceContainer = document.querySelector('#dice-container');
const btnGroup = document.querySelector('#btn-group')
const btn = document.querySelector('#btn');


// number generator
function numberGen() {
    let random1 = Math.random()*5 + 1;
    let diceNumber1 = random1.toFixed();

    let random2 = Math.random()*5 + 1;
    let diceNumber2 = random2.toFixed();

    console.log(`${diceNumber1} ${diceNumber2}`);

    displayDice(diceNumber1, diceNumber2);
}

// display dice based on rolls
function displayDice(diceNumber1, diceNumber2) {
    
    const dice1 = document.querySelector('#dice-1').setAttribute("src", "./assets/img/dice-" + diceNumber1 + '.png');
    const dice2 = document.querySelector('#dice-2').setAttribute("src", "./assets/img/dice-" + diceNumber2 + '.png');;
    
}
// function start
btn.addEventListener('click', numberGen);