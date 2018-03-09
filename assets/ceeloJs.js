
var score

// function that does the logic behind the various dice combinations
function ceelo(){
   // set min and max numbers at 1 and 6 to mimic dice
   var min = Math.ceil(1);
   var max = Math.floor(6);
   // random number from 1-6 for the dice
   var one = Math.floor(Math.random() * (max - min + 1)) + min;
   var two = Math.floor(Math.random() * (max - min + 1)) + min;
   var three = Math.floor(Math.random() * (max - min + 1)) + min;
   // the three rolls combined into sorted array
   var roll = [one, two, three].sort();

      // if statement listing all possibilities
      if (roll[0] == 1 && roll[1] == 2 && roll[2] == 3){
         score = roll + " Automatic Loss"
      }
      else if (roll[0] === roll[1] && roll[0] === roll[2]){
         score = roll + " Powerful roll! Rolled a triple " + roll[0];
      }
      else if (roll[0] === roll[1] && roll[0] != roll[2]){
         score = roll +" You rolled a " + roll[2]
      }
      else if (roll[2] === roll[1] && roll[0] != roll[1]){
         score = roll + " You rolled a " + roll[0]
      }
      else if (roll[0] == 4 && roll[1] == 5 && roll[2] == 6){
         score = "4-5-6, Ceelo! Automatic win!"
      }
      else {
         score = "You rolled a " + roll + ". Keep shootin'."
      }
}

// runs ceelo function for player 1
function ceelo1(){
	ceelo();
	document.getElementById("score1").innerHTML = score
  	if (score.charAt(score.length-2) != "'"){
    	document.getElementById("myBtn").disabled = true
    }
}

// runs ceelo function for player 2
function ceelo2(){
	ceelo();
  document.getElementById("score2").innerHTML = score
  if (score.charAt(score.length-2) != "'"){
    	document.getElementById("myBtn2").disabled = true
    }
}

// resets game
function reset(){
	document.getElementById("myBtn").disabled = false;
  document.getElementById("myBtn2").disabled = false;
	document.getElementById("score1").innerHTML = "";
  document.getElementById("score2").innerHTML = "";
}