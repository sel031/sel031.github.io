var die1, die2, dieSum, balance, banner, outcome, die1Name, die2Name, numRolls;
balance = 0;

function rollDice() {
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    dieSum = die1 + die2;

    die1Image = document.querySelectorAll("img")[0];
    die1Name = "images/dice" + die1 + ".png";
    die1Image.setAttribute("src", die1Name);

    die2Image = document.querySelectorAll("img")[1];
    die2Name = "images/dice" + die2 + ".png";
    die2Image.setAttribute("src", die2Name);
}

function whoWon() {
    if (dieSum <= 5){
      outcome = "You lose, please pay me $5.";
      balance -= 5;
    } else if (dieSum >= 9){
      outcome = "You win, I pay you $5.";
      balance += 5;
    } else {
      outcome = "It's a draw, nobody wins or loses.";
      balance += 0;
    }

    banner = die1 + " + " + die2 + " is: " + dieSum;
    document.querySelector("h3").innerHTML = banner + "<br>" + outcome;
    document.getElementById("balanceDisplay").textContent = balance;
}

function playMultipleTimes() {
  // Get the number of times to play from the input
  numRolls = parseInt(document.getElementById("numRolls").value);

  // Play the game in a loop
  for (let i = 0; i < numRolls; i++) {
    rollDice();
    whoWon();
  }
}
