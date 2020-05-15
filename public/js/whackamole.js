const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;
let countID = null;
let moleID = null;

function hideMole() {
    squares.forEach(className => {
        className.classList.remove('mole');
    });
}

function randomSquare() {
    hideMole();
    
    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    hitPosition = randomPosition.id;
}

// Add an event listener to each square to determine if the square is a hit (has the mole).
squares.forEach(square => {
    square.addEventListener('mouseup', () => {
        if (square.id === hitPosition) {
            result++;
            score.textContent = result;
        }
    });
});

function moveMole() {
    moleID = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(moleID);
        clearInterval(countID);
        
        hideMole();

        alert('GAME OVER! Your score is ' + result);
    }
}

countID = setInterval(countDown, 1000);
