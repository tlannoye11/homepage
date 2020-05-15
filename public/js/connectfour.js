document.addEventListener('DOMContentLoaded', () => {
    const spaces = document.querySelectorAll('.space');
    const result = document.querySelector('#result');
    const displayCurrentPlayer = document.querySelector('#current-player').firstChild;
    const winningArrays = [
        [0, 1, 2, 3],[1, 2, 3, 4],[2, 3, 4, 5],[3, 4, 5, 6],[7, 8, 9, 10],[8, 9, 10, 11],[9, 10, 11, 12],[10, 11, 12, 13],[14, 15, 16, 17],[15, 16, 17, 18],[16, 17, 18, 19],[17, 18, 19, 20],[21, 22, 23, 24],[22, 23, 24, 25],[23, 24, 25, 26],[24, 25, 26, 27],[28, 29, 30, 31],[29, 30, 31, 32],[30, 31, 32, 33],[31, 32, 33, 34],[35, 36, 37, 38],[36, 37, 38, 39],[37, 38, 39, 40],[38, 39, 40, 41],
        [0, 7, 14, 21],[1, 8, 15, 22],[2, 9, 16, 23],[3, 10, 17, 24],[4, 11, 18, 25],[5, 12, 19, 26],[6, 13, 20, 27],[7, 14, 21, 28],[8, 15, 22, 29],[9, 16, 23, 30],[10, 17, 24, 31],[11, 18, 25, 32],[12, 19, 26, 33],[13, 20, 27, 34],[14, 21, 28, 35],[15, 22, 29, 36],[16, 23, 30, 37],[17, 24, 31, 38],[18, 25, 32, 39],[19, 26, 33, 40],[20, 27, 34, 41],
        [0, 8, 16, 24],[1, 9, 17, 25],[2, 10, 18, 26],[3, 11, 19, 27],[7, 15, 23, 31],[8, 16, 24, 32],[9, 17, 25, 33],[10, 18, 26, 34],[14, 22, 30, 38],[15, 23, 31, 39],[16, 24, 32, 40],[17, 25, 33, 41],
        [3, 9, 15, 21],[4, 10, 16, 22],[5, 11, 17, 23],[6, 12, 18, 24],[10, 16, 22, 28],[11, 17, 23, 29],[12, 18, 24, 30],[13, 19, 25, 31],[17, 23, 29, 35],[18, 24, 30, 36],[19, 25, 31, 37],[20, 26, 32, 38]
    ];

    let playerOnesTurn = true;

    function markSpace(index) {
        spaces[index].classList.add('taken');
        spaces[index].firstChild.classList.add(playerOnesTurn ? 'player-one' : 'player-two');
        spaces[index].firstChild.innerHTML = '<span>'+(playerOnesTurn ? '1' : '2')+'</span>';

        playerOnesTurn = !playerOnesTurn;

        displayCurrentPlayer.innerHTML = playerOnesTurn ? "1" : "2";
}

    for (let i = 0; i < spaces.length; i++) {
        (function(index) {
            // Add an onclick event to each space on the board.
            spaces[i].onclick = function() {
                // Make sure the current space isn't already taken.
                if (!spaces[index].classList.contains('taken')) {
                    // If the space below the current space is taken,
                    // or the current space is on the bottom,
                    // put your marker on top of it.
                    if (spaces[index].classList.contains('outer-bottom')){
                        markSpace(index);
                    }
                    else if (spaces[index + 7].classList.contains('taken')) {
                        markSpace(index);
                    }
                }
            }
        })(i);
    }

    function didWeWin() {
        for (let w = 0; w < winningArrays.length; w++) {
            const winningSpace1 = spaces[winningArrays[w][0]];
            const winningSpace2 = spaces[winningArrays[w][1]];
            const winningSpace3 = spaces[winningArrays[w][2]];
            const winningSpace4 = spaces[winningArrays[w][3]];

            if (winningSpace1.firstChild.classList.contains('player-one') &&
                winningSpace2.firstChild.classList.contains('player-one') &&
                winningSpace3.firstChild.classList.contains('player-one') &&
                winningSpace4.firstChild.classList.contains('player-one')) {
                result.innerHTML = 'Player One Wins!';
            }
            else if (winningSpace1.firstChild.classList.contains('player-two') &&
                     winningSpace2.firstChild.classList.contains('player-two') &&
                     winningSpace3.firstChild.classList.contains('player-two') &&
                     winningSpace4.firstChild.classList.contains('player-two')) {
                result.innerHTML = 'Player Two Wins!';
            }
        }
    }

    spaces.forEach(space => space.addEventListener('click', didWeWin));
});
