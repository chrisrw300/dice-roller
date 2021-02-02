// variables
let diceContainer = document.querySelector('#dice-container');
const btn = document.querySelector('#btn');

// dice at start
const imgDiv1 = document.createElement('div');
imgDiv1.innerHTML = '<img src="../assets/img/dice-five.png" alt="dice"/>';
const imgDiv2 = document.createElement('div');
imgDiv2.innerHTML = '<img src="../assets/img/dice-six.png" alt="dice"/>';
diceContainer.appendChild(imgDiv1);
diceContainer.appendChild(imgDiv2);


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
    
    // dice 1 rolls
    if (diceNumber1 === '1') {
        console.log('1');
    } else if (diceNumber1 === '2') {
        console.log('2')
    } else if (diceNumber1 === '3') {
        console.log('3')
    } else if (diceNumber1 === '4') {
        console.log('4')
    } else if (diceNumber1 === '5') {
        console.log('5')
    } else if (diceNumber1 === '6') {
        console.log('6')
    } else {
        console.log('no')
    }

    // dice 2 rolls
    if (diceNumber2 === '1') {
        console.log('1');
    } else if (diceNumber2 === '2') {
        console.log('2')
    } else if (diceNumber2 === '3') {
        console.log('3')
    } else if (diceNumber2 === '4') {
        console.log('4')
    } else if (diceNumber2 === '5') {
        console.log('5')
    } else if (diceNumber2 === '6') {
        console.log('6')
    } else {
        console.log('no')
    }
}


// add styles to dice if snake eyes is rolled



// function start
btn.addEventListener('click', numberGen);