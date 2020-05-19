document.addEventListener('DOMContentLoaded', () => {
    const width = 10;
    const height = 20;
    const grid = document.querySelector('.grid');
    const scoreDisplay = document.querySelector('#score');
    const startButton = document.querySelector('#startButton');

    // The Tetrominoes
    const lTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ];

    const zTetromino = [
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1]
    ];

    const tTetromino = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
    ];

    const oTetromino = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ];

    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ];

    const theTetrominos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];
    const startPosition = 104;
    const startRotation = 0;

    let squares = Array.from(grid.querySelectorAll('.square'));
    let currentRotation;
    let currentPosition;
    let timerId;

    // Draw a Tetromino.
    function drawTetromino() {
        currentTetromino.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino');
        });
    }

    // Undraw a Tetromino.
    function undrawTetromino() {
        currentTetromino.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino');
        });
    }

    // Get a new random Tetromino.
    function getNewTetromino() {
        // Set the starting position/rotation for the new Tetromino.
        currentPosition = startPosition;
        currentRotation = startRotation;

        return theTetrominos[Math.floor(Math.random() * theTetrominos.length)][currentRotation];
    }

    // Move the current Tetromino down one square every second,
    // then check if it has reached a stopping point.
    function moveDown() {
        undrawTetromino();
        currentPosition += width;
        drawTetromino();
        freeze();
    }

    function freeze() {
        // If we've reached the end of the board,
        // or we've run into a taken square.
        console.log("pos:",currentPosition);
        console.log("current tetromino:",currentTetromino);
        if (currentTetromino.some(index => (currentPosition + index + width) >= (width * height)) ||
            currentTetromino.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            // Add a class of "taken" to each 
            currentTetromino.forEach(index => squares[currentPosition + index].classList.add('taken'));

            // Make a new random Tetromino.
            currentTetromino = getNewTetromino();
            drawTetromino();
        }
    }

    // Make start button functionality.
    startButton.addEventListener('click', () => {
        if (timerId) {
            clearInterval(timerId);
            timerId = null;
            startButton.innerHTML = "Start";
        }
        else {
            drawTetromino();
            timerId = setInterval(moveDown, 1000);
            // set the next random Tetromino.
            startButton.innerHTML = "Pause";
        }
    })

    // Randomly select one Tetromino.
    let currentTetromino = getNewTetromino();

    // Put the first Tetromino on the board.
    drawTetromino();
});
