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
}

// display dice based on rolls



// add styles to dice if snake eyes is rolled



// function start
btn.addEventListener('click', numberGen);