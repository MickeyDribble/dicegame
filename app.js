const dice = document.getElementById("dice");
const roll = document.getElementById("roll");
const score = document.getElementById("score");

let player1 = 0

roll.addEventListener("click", () => {
    roll.innerHTML = "Roll"
    let player1Roll = Math.ceil(Math.random()*6);
    dice.src = `image/dice-${player1Roll}.png`;
    player1 += player1Roll;
    score.innerHTML = player1;
    if (player1 >= 20){
        score.innerHTML = `${player1} YOU WIN!`
        player1 = 0
        roll.innerHTML = "Play Again?"
        
    } else if (player1Roll === 1) {
        score.innerHTML = `${player1} You LOSE!!`
        player1 = 0
        roll.innerHTML = "Play Again?"
        
    }

})