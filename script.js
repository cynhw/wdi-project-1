
// define the variables that will be used throughout
var playerOne = 0;
var playerTwo = 0;
var rollCount = 0;
var bonus = 0;
var penalty = 0;


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


$('#rollTheDice').on('click', function() {
// console.log('click');
	playerMove(Math.ceil(Math.random() * 6));
	$('#span').hide();
	rollCount++;
	
});

$('#football').on('click', function() {
	$(this).effect('bounce',"slow")

});

var winner = function(e) {
	if (playerOne >= 25) {
		//alert('Player one wins!');
		swal({   
			title: "FINAL",   
			text: "The Seahawks led the ball into the endzone. #beautiful",   
			imageUrl: "img/seahawks.png",
			imageSize: '300x300' });
		rollCount = 0;
		playerOne = 0;
		playerTwo = 0;
		$('.square').removeClass('player-one');
		$('.square').removeClass('player-two');
		//$('#playerOneBounce').html("Player one wins!");
		//$('#playerTwoBounce').html(" ");	
		// e.stopPropagtaion();

	}

	if (playerTwo >=25) {
		//alert('Player two wins!');
		swal({   
			title: "FINAL",   
			text: "The Ravens fought on. And won.",   
			imageUrl: "img/ravens.png",
			imageSize: '300x300' });
		rollCount = 0;
		playerOne = 0;
		playerTwo = 0;
		$('.square').removeClass('player-one');
		$('.square').removeClass('player-two');
		//$('#playerTwoBounce').html("Player two wins!");	
		//$('#playerOneBounce').html(" ");	
		// e.stopPropagtaion();

	}
};


var playerMove = function (rollNumber) {

	var rollResult = Math.ceil(Math.random() * 6);
		
	if (rollCount % 2 === 0) {
		playerOne += rollNumber;
		$('.player-one').removeClass('player-one');
		$('.player-one').removeClass('overlap');
		$('.square[value=' + playerOne + ']').addClass('player-one');
		//$('#playerOneBounce').html("Player 1 gained " + rollNumber + " yards.");
		// alert("Player 1 rolled a " + rollNumber + "!");
	}


	else {
		playerTwo += rollNumber;
		$('.player-two').removeClass('player-two');
		$('.player-two').removeClass('overlap');
		$('.square[value=' + playerTwo + ']').addClass('player-two');
		$//('#playerTwoBounce').html("Player 2 gained " + rollNumber + " yards.");
		// alert("Player 2 rolled a " + rollNumber + "!");

	}


	// check for yard gains aka bonuses for player 1

	if (playerOne === 6) {
		//$('#playerOneBounce').html("Seahawks made a long pass and gained " + (rollNumber + 3) + " yards.");
		$('.square[value=' + playerOne + ']').addClass('player-one');
		swal({   
			title: "1st Down!",   
			text: "Wilson found Lockett wide open. First down.",   
			imageUrl: "img/td_seahawks.png",
			imageSize: '150x150',
			},
			function(){
				bonus = 3;
				playerOne = playerOne + bonus;
				$('.player-one').removeClass('player-one');
				$('.square[value=' + playerOne + ']').addClass('player-one');
			}
		);
	}

	if (playerOne === playerTwo) {
		$('.square[value=' + playerOne + ']').addClass('overlap');
		$('.square[value=' + playerTwo + ']').addClass('overlap');
	}

	else {
		$('.player-one').removeClass('overlap');
		$('.player-two').removeClass('overlap');
	}

	

	if (playerOne === 13){
		//$('#playerOneBounce').html("Yet another long pass. Gained " + (rollNumber + 1) + " yards.");
		$('.square[value=' + playerOne + ']').addClass('player-one');
		swal({   
			title: "Complete Pass!",   
			text: "Yet another 1st down.",   
			imageUrl: "img/td_seahawks.png",
			imageSize: '150x150',
			},
			function(){
				bonus = 1;
				playerOne = playerOne + bonus;
				$('.player-one').removeClass('player-one');
				$('.square[value=' + playerOne + ']').addClass('player-one');
			}
		);
	}

		if (playerOne === playerTwo) {
		$('.square[value=' + playerOne + ']').addClass('overlap');
		$('.square[value=' + playerTwo + ']').addClass('overlap');
	}

	else {
		$('.player-one').removeClass('overlap');
		$('.player-two').removeClass('overlap');
	}

	if (playerOne === 15){
		//$('#playerOneBounce').html("Wilson to Graham 32-yard pass complete. " + (rollNumber + 3) + " yards.");
		$('.square[value=' + playerOne + ']').addClass('player-one');
		swal({   
			title: "32-yeard gain!",   
			text: "It's no wonder Graham became a Seahawks.",   
			imageUrl: "img/td_seahawks.png",
			imageSize: '150x150',
			},
			function(){
				bonus = 3;
				playerOne = playerOne + bonus;
				$('.player-one').removeClass('player-one');
				$('.square[value=' + playerOne + ']').addClass('player-one');
			}
		);
	}

		if (playerOne === playerTwo) {
		$('.square[value=' + playerOne + ']').addClass('overlap');
		$('.square[value=' + playerTwo + ']').addClass('overlap');
	}

	else {
		$('.player-one').removeClass('overlap');
		$('.player-two').removeClass('overlap');
	}

	if (playerOne === 19){
		//$('#playerOneBounce').html("Seahawks made a complete pass and gained " + (rollNumber + 4) + " yards.");
		$('.square[value=' + playerOne + ']').addClass('player-one');
		swal({   
			title: "1st Down!",   
			text: "Keep gaining those yards #GoHawks",   
			imageUrl: "img/td_seahawks.png",
			imageSize: '150x150',
			},
			function(){
				bonus = 4;
				playerOne = playerOne + bonus;
				$('.player-one').removeClass('player-one');
				$('.square[value=' + playerOne + ']').addClass('player-one');
			}
		);
	}

		if (playerOne === playerTwo) {
		$('.square[value=' + playerOne + ']').addClass('overlap');
		$('.square[value=' + playerTwo + ']').addClass('overlap');
	}

	else {
		$('.player-one').removeClass('overlap');
		$('.player-two').removeClass('overlap');
	}

	if (playerOne === 24){
		$('.square[value=' + playerOne + ']').addClass('player-one');
		swal({   
			title: "Field Goal was Good.",   
			text: " ",   
			imageUrl: "img/fg_seahawks.jpg",
			imageSize: '150x150',
			},
			function(){
				bonus = 1;
				playerOne = playerOne + bonus;
				$('.player-one').removeClass('player-one');
				$('.square[value=' + playerOne + ']').addClass('player-one');
			}
		);
	}

	if (playerOne >= 25)  {
		$('.player-one').removeClass('overlap');
		$('.player-two').removeClass('overlap');
		winner();
	}

	if (playerTwo >= 25) {
		$('.player-one').removeClass('overlap');
		$('.player-two').removeClass('overlap');
		winner();
	}

	// check for yard gains aka bonuses for player 2

	if (playerTwo === 6) {
		$('.square[value=' + playerTwo + ']').addClass('player-two');
		swal({   
			title: "1st Down!",   
			text: "Flacco steady pass to Smith Sr.",   
			imageUrl: "img/td_ravens.png",
			imageSize: '150x150',
			},
			function(){
				bonus = 3;
				playerTwo = playerTwo + bonus;
				$('.player-two').removeClass('player-two');
				$('.square[value=' + playerTwo + ']').addClass('player-two');
			}
		);
		
	}

		if (playerOne === playerTwo) {
		$('.square[value=' + playerOne + ']').addClass('overlap');
		$('.square[value=' + playerTwo + ']').addClass('overlap');
	}

	else {
		$('.player-one').removeClass('overlap');
		$('.player-two').removeClass('overlap');
	}

		if (playerTwo === 13){
		$('.square[value=' + playerTwo + ']').addClass('player-two');
		swal({   
			title: "1st Down!",   
			text: "Flacco saw an opening. First down.",   
			imageUrl: "img/td_ravens.png",
			imageSize: '150x150',
			},
			function(){
				bonus = 1;
				playerTwo = playerTwo + bonus;
				$('.player-two').removeClass('player-two');
				$('.square[value=' + playerTwo + ']').addClass('player-two');
			}
		);
	}

		if (playerOne === playerTwo) {
		$('.square[value=' + playerOne + ']').addClass('overlap');
		$('.square[value=' + playerTwo + ']').addClass('overlap');
	}

	else {
		$('.player-one').removeClass('overlap');
		$('.player-two').removeClass('overlap');
	}

	if (playerTwo === 15){
		$('.square[value=' + playerTwo + ']').addClass('player-two');
		swal({   
			title: "1st Down!",   
			text: "Seems like the Ravens have been working on those passes.",   
			imageUrl: "img/td_ravens.png",
			imageSize: '150x150',
			},
			function(){
				bonus = 3;
				playerTwo = playerTwo + bonus;
				$('.player-two').removeClass('player-two');
				$('.square[value=' + playerTwo + ']').addClass('player-two');
			}
		);
	}

	if (playerTwo === playerOne) {
	$('.square[value=' + playerOne + ']').addClass('overlap');
	$('.square[value=' + playerTwo + ']').addClass('overlap');
	}

	else {
		$('.player-one').removeClass('overlap');
		$('.player-two').removeClass('overlap');
	}


	if (playerTwo === 19){
	$('.square[value=' + playerTwo + ']').addClass('player-two');
		swal({   
			title: "1st Down!",   
			text: "Justin Forsett. literally ran the ball for 50 years.",   
			imageUrl: "img/td_ravens.png",
			imageSize: '150x150',
			},
			function(){
				bonus = 4;
				playerTwo = playerTwo + bonus;
				$('.player-two').removeClass('player-two');
				$('.square[value=' + playerTwo + ']').addClass('player-two');
			}
		);
	}

		if (playerOne === playerTwo) {
		$('.square[value=' + playerOne + ']').addClass('overlap');
		$('.square[value=' + playerTwo + ']').addClass('overlap');
	}

	else {
		$('.player-one').removeClass('overlap');
		$('.player-two').removeClass('overlap');
	}

	if (playerTwo === 24){
	$('.square[value=' + playerTwo + ']').addClass('player-two');
		swal({   
			title: "Field Goal was Good.",   
			text: " ",   
			imageUrl: "img/fg_ravens.jpg",
			imageSize: '200x200',
			},
			function(){
				bonus = 1;
				playerTwo = playerTwo + bonus;
				$('.player-two').removeClass('player-two');
				$('.square[value=' + playerTwo + ']').addClass('player-two');
			}
		);
	}
	
	if (playerOne === playerTwo) {
		$('.square[value=' + playerOne + ']').addClass('overlap');
		$('.square[value=' + playerTwo + ']').addClass('overlap');
	}

	else {
		$('.player-one').removeClass('overlap');
		$('.player-two').removeClass('overlap');
	}

	if (playerOne === 1) {
		$('.square[value=' + playerOne + ']').addClass('player-one');
		swal({   
			title: "False Start.",   
			text: "Somebody got way too excited..",   
			imageUrl: "img/penalty_seahawks.jpg",
			imageSize: "200x200",
			},
			function(){
				penalty = 1;
				playerOne = playerOne - penalty;
				$('.player-one').removeClass('player-one');
				$('.square[value=' + playerOne + ']').addClass('player-one');
			}
		);
	}

		if (playerOne === 11) {
		$('.square[value=' + playerOne + ']').addClass('player-one');
		swal({   
			title: "False Start.",   
			text: "Somebody got way too excited..",   
			imageUrl: "img/penalty_seahawks.png",
			imageSize: '200x200',
			},
			function(){
				penalty = 3;
				playerOne = playerOne - penalty;
				$('.player-one').removeClass('player-one');
				$('.square[value=' + playerOne + ']').addClass('player-one');
			}
		);
	}

	if (playerOne === playerTwo) {
		$('.square[value=' + playerOne + ']').addClass('overlap');
		$('.square[value=' + playerTwo + ']').addClass('overlap');
	}

		else {
		$('.player-one').removeClass('overlap');
		$('.player-two').removeClass('overlap');
	}

	if (playerTwo === 1) {
		$('.square[value=' + playerTwo + ']').addClass('player-one');
		swal({   
			title: "False Start.",   
			text: "Somebody got way too excited.",   
			imageUrl: "img/penalty_seahawks.png",
			imageSize: '200x200',
			},
			function(){
				penalty = 1;
				playerTwo = playerTwo - penalty;
				$('.player-two').removeClass('player-two');
				$('.player-one').removeClass('player-one');
				$('.square[value=' + playerTwo + ']').addClass('player-two');
			}
		);
	}

	if (playerTwo === 11) {
		$('.square[value=' + playerTwo + ']').addClass('player-one');
		swal({   
			title: "Pass Interference.",   
			text: "Looks like the Ravens played a little rough.",   
			imageUrl: "img/penalty_ravens.png",
			imageSize: '200x200',
			},
			function(){
				penalty = 1;
				playerTwo = playerTwo - penalty;
				$('.player-two').removeClass('player-two');
				$('.player-one').removeClass('player-one');
				$('.square[value=' + playerTwo + ']').addClass('player-two');
			}
		);
	}

	//overlapping of two players
	if (playerOne === playerTwo) {
		$('.square[value=' + playerOne + ']').addClass('overlap');
		$('.square[value=' + playerTwo + ']').addClass('overlap');
	}

	else {
		$('.player-one').removeClass('overlap');
		$('.player-two').removeClass('overlap');
	}

		if (playerTwo === 20) {
		$('.square[value=' + playerTwo + ']').addClass('player-one');
		swal({   
			title: "Pass Interference.",   
			text: "Looks like the Ravens played a little rough.",   
			imageUrl: "img/penalty_ravens.png",
			imageSize: '200x200',
			},
			function(){
				penalty = 2;
				playerTwo = playerTwo - penalty;
				$('.player-two').removeClass('player-two');
				$('.player-one').removeClass('player-one');
				$('.square[value=' + playerTwo + ']').addClass('player-two');
			}
		);
	}

		if (playerOne === playerTwo) {
		$('.square[value=' + playerOne + ']').addClass('overlap');
		$('.square[value=' + playerTwo + ']').addClass('overlap');
	}

	else {
		$('.player-one').removeClass('overlap');
		$('.player-two').removeClass('overlap');
	}

	if (playerOne === 20) {
	$('.square[value=' + playerTwo + ']').addClass('player-one');
		swal({   
			title: "Pass Interference.",   
			text: "Looks like the Seahawks played a little rough.",   
			imageUrl: "img/penalty_ravens.png",
			imageSize: '200x200',
			},
			function(){
				penalty = 2;
				playerOne = playerOne - penalty;
				$('.player-two').removeClass('player-two');
				$('.player-one').removeClass('player-one');
				$('.square[value=' + playerOne + ']').addClass('player-two');
			}
		);
	}

		if (playerOne === playerTwo) {
		$('.square[value=' + playerOne + ']').addClass('overlap');
		$('.square[value=' + playerTwo + ']').addClass('overlap');
	}

	else {
		$('.player-one').removeClass('overlap');
		$('.player-two').removeClass('overlap');
	}

	if (playerOne === 22) {
	$('.square[value=' + playerTwo + ']').addClass('player-one');
		swal({   
			title: "Missed Field Goal.",   
			text: "Not Hauschka's best day.",   
			imageUrl: "img/fg_seahawks.jpg",
			imageSize: '200x200',
			},
			function(){
				penalty = 0;
				playerOne = playerOne - penalty;
				$('.player-two').removeClass('player-two');
				$('.player-one').removeClass('player-one');
				$('.square[value=' + playerOne + ']').addClass('player-two');
			}
		);
	}

		if (playerOne === playerTwo) {
		$('.square[value=' + playerOne + ']').addClass('overlap');
		$('.square[value=' + playerTwo + ']').addClass('overlap');
	}

	else {
		$('.player-one').removeClass('overlap');
		$('.player-two').removeClass('overlap');
	}

	if (playerTwo === 22) {
		$('.square[value=' + playerTwo + ']').addClass('player-one');
		swal({   
			title: "Missed Field Goal.",   
			text: "Was it the wind? Or did Justin Tucker totally miss?",   
			imageUrl: "img/fg_ravens.jpg",
			imageSize: '200x200',
			},
			function(){
				penalty = 0;
				playerTwo = playerTwo - penalty;
				$('.player-two').removeClass('player-two');
				$('.player-one').removeClass('player-one');
				$('.square[value=' + playerTwo + ']').addClass('player-two');
			}
		);
	}

		if (playerOne === playerTwo) {
		$('.square[value=' + playerOne + ']').addClass('overlap');
		$('.square[value=' + playerTwo + ']').addClass('overlap');
	}

	else {
		$('.player-one').removeClass('overlap');
		$('.player-two').removeClass('overlap');
	}

	 console.log(playerOne);
	 console.log(playerTwo);


// console.log(rollNumber);

}

$("#loadGameInstruction").on("click", function() {
        $("#intro").fadeOut(500);
        $("#instructionBox").delay(550).fadeIn(500);
        clickCount = 0;
    });

$("#loadGame").on("click", function() {
        $("#instructionBox").fadeOut(500);
        $("#game").delay(550).fadeIn(500);
        clickCount = 0;
    });

$("#instructions").on("click", function() {
        $("#game").fadeOut(500);
        $("#instructionBox").delay(550).fadeIn(500);
        clickCount = 0;
    });

$("#home").on("click", function() {
        $("#game").fadeOut(500);
        $("#intro").delay(550).fadeIn(500);
        clickCount = 0;
    });

