// Images must be 100px by 100px
document.addEventListener("DOMContentLoaded", () => {
	// cards on the board
	const cardArray = [
		{
			value: "ace",
			suit: "hearts",
		},
		{
			value: "two",
			suit: "hearts",
		},
		{
			value: "three",
			suit: "hearts",
		},
		{
			value: "four",
			suit: "hearts",
		},
		{
			value: "five",
			suit: "hearts",
		},
		{
			value: "six",
			suit: "hearts",
		},
		{
			value: "seven",
			suit: "hearts",
		},
		{
			value: "eight",
			suit: "hearts",
		},
		{
			value: "nine",
			suit: "hearts",
		},
		{
			value: "ten",
			suit: "hearts",
		},
		{
			value: "ace",
			suit: "spades",
		},
		{
			value: "two",
			suit: "spades",
		},
		{
			value: "three",
			suit: "spades",
		},
		{
			value: "four",
			suit: "spades",
		},
		{
			value: "five",
			suit: "spades",
		},
		{
			value: "six",
			suit: "spades",
		},
		{
			value: "seven",
			suit: "spades",
		},
		{
			value: "eight",
			suit: "spades",
		},
		{
			value: "nine",
			suit: "spades",
		},
		{
			value: "ten",
			suit: "spades",
		},
	];

	const gameBoard = document.querySelector(".game-board");
	const scoreDisplay = document.querySelector("#score");

	let cardsChosen = [];
	let cardsWon = [];

	// Create the game board.
	createGameBoard = () => {
		for (let i = 0; i < cardArray.length; i++) {
			let card = document.createElement("img");

			card.classList.add("card");
			//card.classList.add(cardArray[i].value);
            //card.classList.add(cardArray[i].suit);
            card.classList.add('cardback');
			//card.setAttribute('src', 'img/cards/hearts.jpg'); // BLANK IMAGE
			card.setAttribute("id", "card"+i);
			card.addEventListener("click", flipCard);
			gameBoard.appendChild(card);
		}
	}

	// Check for matches
	checkForMatch = () => {
        console.log("match?");
        console.log(cardsChosen[0]);
        console.log(cardsChosen[1]);

        let cardOne = cardArray[parseInt(cardsChosen[0].slice(4))];
        let cardTwo = cardArray[parseInt(cardsChosen[1].slice(4))];

		if (cardOne.value === cardTwo.value) {
			alert("MATCH!");
			cardsWon.push(cardsChosen[0]);
            cardsWon.push(cardsChosen[1]);
            
            // set both matched cards to grayed out class
            document.getElementById(cardsChosen[0]).classList.add('cardwon');
            document.getElementById(cardsChosen[1]).classList.add('cardwon');
        } 
        else {
			alert("NOT A MATCH");
            // set both matched cards to cardback class
            document.getElementById(cardsChosen[0]).classList.remove(cardOne.value);
            document.getElementById(cardsChosen[0]).classList.remove(cardOne.suit);
            document.getElementById(cardsChosen[0]).classList.add('cardback');

            document.getElementById(cardsChosen[1]).classList.remove(cardTwo.value);
            document.getElementById(cardsChosen[1]).classList.remove(cardTwo.suit);
            document.getElementById(cardsChosen[1]).classList.add('cardback');
		}

		// Clear out the chosen cards
        cardsChosen = [];

		// Increment the score.
        scoreDisplay.textContent = cardsWon.length / 2;
        
        console.log("Cards won",cardsWon.length);

		if (cardsWon.length === cardArray.length) {
			scoreDisplay.textContent = "YOU DID IT!";
		}
	};

	// Flip your card
	function flipCard() {
        let chosenID = this.getAttribute('id');
        let chosenCard = cardArray[parseInt(chosenID.slice(4))];

        console.log("I clicked",chosenCard);

        // Make sure the card hasn't already been matched
        if (!this.classList.contains('cardwon')) {
            // Remove the cardback and add the actual card image
            this.classList.remove('cardback');
            this.classList.add(chosenCard.value);
            this.classList.add(chosenCard.suit);

            // Add this card to the chosen cards
            cardsChosen.push(chosenID);

            // Check if there are enough for a match
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 300);
            }
        }
	};

	// Randomize the game board
	cardArray.sort(() => 0.5 - Math.random());

    // START THE GAME!
	createGameBoard();
});
