// variables



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
numberGen();