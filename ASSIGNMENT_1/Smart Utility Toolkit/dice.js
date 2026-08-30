const crypto = require("crypto");

console.log("Rolling the dice...");

for (let i = 1; i <= 5; i++) {

    const diceValue = crypto.randomInt(1, 7);

    console.log("Dice Roll " + i + ": " + diceValue);
}