// get all element by their id
const stat = document.getElementById('stat');
const buttonStart = document.getElementById('btn-start');
const buttonClick = document.getElementById('btn-click');

// declare variable and initialize
const winScore = 10;
let count = 0;

// add event listener
buttonStart.addEventListener('click', function(){
    // invoke start function
    start();
});

buttonClick.addEventListener('click', function(){
    // increment count by 1
    count++;
    // set count in the stat
    stat.textContent = count;
});

// start function declaration
const start = () => {
    // set count to 0
    count = 0;
    // show count on the UI
    stat.textContent = count;
    // make click button clickable
    buttonClick.removeAttribute('disabled');
    // start counting
    starCounting();
}

// startCounting function declaration
const starCounting = () => {
    // set timeout function for 2 second
    setTimeout(() => {
        if (isWin()) {
            stat.textContent = 'You Won!';
        }else {
            stat.textContent = 'You Lost!';
        }
        buttonClick.setAttribute('disabled', true);
    }, 2000);
}

// isWin function declaration
const isWin = () => {
    if (count < winScore) {
        return false;
    }else {
        return true;
    }
}