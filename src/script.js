"use strict";

// TODO - write your code here.

const randomDamage = () => Math.floor((Math.random()*10) +1);
// console.log(randomDamage());
const chooseOption = (opt1,opt2) => {
    const randNum = Math.floor((Math.random()*2));
    return randNum === 0 ? opt1:opt2;
}
// console.log(chooseOption(2,4));
const attackPlayer = function(health) {
    return (health - randomDamage());
}
// console.log(`Your health is now ${attackPlayer(10)}`);
const logHealth = (player,health) => console.log(`${player} health: ${health}`);
const logDeath = (winner,loser) => console.log(`${winner} defeated ${loser}`);
const isDead = (health) => (health <= 0) ? true:false;

function fight(player1,player2,player1Health,player2Health) {
    while (true) {
        const attacker = chooseOption(player1,player2);
        if (attacker === player1) {
            player2Health = attackPlayer(player2Health);
            logHealth(player2,player2Health);
                if (isDead(player2Health) === true) {
                    logDeath(player1,player2);
                    break;
                } 
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth (player1,player1Health);
            if (isDead(player1Health) === true) {
                logDeath(player2,player1);
                break;
            }
        }
    }
}

fight("Daryl","Jake",100,100);