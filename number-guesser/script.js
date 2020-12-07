let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
	return Math.floor(10 * Math.random());
}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
	let humanGuessInaccuracy = Math.abs(humanGuess - targetNumber);
	let computerGuessInaccuracy = Math.abs(computerGuess - targetNumber);
	if (humanGuessInaccuracy > computerGuessInaccuracy) {
		return false;
	}
	return true;
}

function updateScore(winner) {
	if (winner === 'human') {
		humanScore += 1;
	}
	else if (winner === 'computer') {
		computerScore += 1;
	}
}

function advanceRound() {
	currentRoundNumber += 1;
}