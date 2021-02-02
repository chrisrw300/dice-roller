// variables
let diceContainer = document.querySelector('#dice-container');
let snakeEyes = document.querySelector('.snake-eyes');
let diceTotal = document.querySelector('#dice-total');
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
    
    // if snake eyes are rolled, display box shadow
    if (diceNumber1 === diceNumber2) {
        document.querySelector('#dice-1').style.boxShadow = "0 0 25px red"
        document.querySelector('#dice-2').style.boxShadow = "0 0 25px red"

        snakeEyes.classList.remove('hidden');

    } else {
        document.querySelector('#dice-1').style.boxShadow = "none"
        document.querySelector('#dice-2').style.boxShadow = "none"

        snakeEyes.classList.add('hidden');
    }

    // parse string to add up as integers
    let totalNumber1 = parseInt(diceNumber1, 10);
    let totalNumber2 = parseInt(diceNumber2, 10);

    // total of dice
    diceTotal.innerHTML = totalNumber1 + totalNumber2;
}
// function start
btn.addEventListener('click', numberGen);