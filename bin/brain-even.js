#!/usr/bin/env node
import readlineSync from "readline-sync";


const generateRandomNumber = () => {
    return Math.floor(Math.random() * 99) + 2;
}

const gameIsEvenNumber = () => {
    console.log('Welcome to the Brain Games!');
    const getUserName =  readlineSync.question('May I have your name? ');

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const number = generateRandomNumber();

        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ');
        if ((answer === 'yes' && number % 2 === 0) || (answer === 'no' && number % 2 !== 0)) {
            console.log('Correct!');
        } else if (answer === 'yes') {
            console.log(`'${answer}' is wrong answer. Correct answer was 'no'.\nLet's try again, ${getUserName}!`);
            return;
        } else if (answer === 'no') {
            console.log(`'${answer}' is wrong answer. Correct answer was 'yes'.\nLet's try again, ${getUserName}`);
            return;
        } else {
            console.log(`'${answer}' is wrong answer.\nLet's try again, ${getUserName}`);
            return;
        }
        console.log(`Congratulations, ${getUserName}!`);
    }
}
gameIsEvenNumber();