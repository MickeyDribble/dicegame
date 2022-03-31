const dice = document.getElementById("dice");
const roll = document.getElementById("roll");


roll.addEventListener("click", () => {
    let player1Roll = Math.ceil(Math.random()*6);
    dice.src = `image/dice-${player1Roll}.png`;
})