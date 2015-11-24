
// define the variables that will be used throughout
var playerOne = 0;
var playerTwo = 0;
var rollCount = 0;


//playerOneMove would be something like:

var boardSquareList = $('.square');
var board = boardSquareList.map(function(obj) {
	return $(boardSquareList[obj]); 
});
	board = board.sort(function (a,b) {
	var value1 = parseInt(a.attr("value"));
	var value2 = parseInt(b.attr("value"));
	if (value2 > value1) {
		return -1;
	} else if (value2 < value1) {
		return 1;
	} else {
		return 0;
	}
});

// rolling the dice will determine your spot on the board game
// playerOne starts off with 0, then add the rollTheDice to that
// how do I make sure the player is moving forward?

$('#rollTheDice').on('click', function() {
// console.log('click');
	playerMove(Math.ceil(Math.random() * 6));
	rollCount++;
	Winner();
			console.log(rollCount);
	
});

var playerMove = function (rollNumber) {

	var rollResult = Math.ceil(Math.random() * 6);
		
	if (rollCount % 2 === 0) {
		playerOne += rollNumber;
		$('.player-one').removeClass('player-one');
		$('.player-one').removeClass('overlap');
		$('.square[value=' + playerOne + ']').addClass('player-one');
		$('#playerRollTurn').html("Player 2 gained " + rollNumber + " yards!");
		alert("Player 1 rolled a " + rollNumber + "!");
	}

	else {
		playerTwo += rollNumber;
		$('.player-two').removeClass('player-two');
		$('.player-two').removeClass('overlap');
		$('.square[value=' + playerTwo + ']').addClass('player-two');
		$('#playerRollTurn').html("Player 1 gained " + rollNumber + " yards!");
		alert("Player 2 rolled a " + rollNumber + "!");

	}

	if (playerOne === playerTwo) {
		$('.square[value=' + playerOne + ']').addClass('overlap');
		$('.square[value=' + playerOne + ']').addClass('overlap');
	}

	else {
		$('.player-one').removeClass('overlap');
		$('.player-two').removeClass('overlap');
	}
}

// $('#rollTheDice').on('click', function() {
// //	console.log('click');

// 	playerMove(Math.ceil(Math.random() * 6));
// });


var Winner = function(e) {
	if (playerOne >= 25) {
		alert('Player one wins!');
		rollCount = 0;
		playerOne = 0;
		playerTwo = 0;
		$('.square').removeClass('player-one');
		$('.square').removeClass('player-two');
		$('#playerRollTurn').html("Player one wins!");
		e.stopPropagtaion();

	}

	if (playerTwo >=25) {
		alert('Player two wins!');
		rollCount = 0;
		playerOne = 0;
		playerTwo = 0;
		$('.square').removeClass('player-one');
		$('.square').removeClass('player-two');
		$('#playerRollTurn').html("Player two wins!");		
		e.stopPropagtaion();

	}
	console.log(playerOne, playerTwo);
};