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
console.log(">>>>>>>>>>>> Extended Challenges Below <<<<<<<<<<<<");


// Extended Challenges: getGrade
const getGrade = (number) => {
    let grade = "Your Grade";
    if (number > 89 && number < 101) {
        return grade = "is an 'A'!";
    } else if (number > 79 && number < 90) {
        return grade = "is 'B'!";
    } else if (number > 69 && number < 80) {
        return grade = "is 'C'.";
    } else if (number > 59 && number < 70) {
        return grade = "is 'D'.";
    } else if (number > -1 && number < 60) {
        return grade = "is 'F'.";
    } else {
        return grade = "can only be calculated if you enter a number between 0 and 100.";
    }
}
console.log("----getGrade Challenge----");
console.log(`Your grade ${getGrade(20)}`);



// Extended Challenges: prioritize
const prioritize = (urgent,important) => {
    let options = [
        {option:1, urgent:true, important:true}, 
        {option:2, urgent:false, important:true}, 
        {option:3, urgent:true, important:false}, 
        {option:4, urgent:false, important:false}
    ];

    for (let i=0 ; i < options.length ; i++) {
        if (options[i].urgent === urgent && options[i].important === important) {
            return options[i].option;
        }
    }
}
console.log("----Prioritize Challenge----");
console.log(`The priority is ${prioritize(false,false)}.`);

// Extended Challenges: calculatePay
// Added some extra info / breakdown of pay to console
const calculatePay = (wage,hours) => {
    let basePay = (hours*wage);
    let overtime = ((hours-40)*(wage*1.5) - ((hours-40)*wage));

    if (hours <= 40) {
        console.log(`Your weekly paycheck comes out to $${basePay} with no overtime.`);
    } else {
        console.log(`Your weekly paycheck comes out to $${basePay+overtime} with overtime included.`) 
        console.log(`$${basePay} is your "base" pay and $${overtime} is your "overtime" pay.`)
        console.log(`You net $${40*wage} from your first 40 hours of work and an additional $${(hours-40)*(wage*1.5)} in ${hours-40} hours of overtime.`);
    }
}
console.log("----calculatePay Challenge----");
calculatePay(20,80)