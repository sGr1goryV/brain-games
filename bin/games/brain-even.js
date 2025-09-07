#!/usr/bin/env node
import _ from 'lodash';
import readlineSync from "readline-sync";
import nameGreeting from "../../src/index.js";


const gameIsEvenNumber = () => {
    const name =  nameGreeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    for (let i = 0; i < 3; i += 1) {
        const number = _.random(2, 100);

        console.log(`Question: ${number}`);
        const answer = readlineSync.question('Your answer: ');
        if ((answer === 'yes' && number % 2 === 0) || (answer === 'no' && number % 2 !== 0)) {
            console.log('Correct!');
        } else if (answer === 'yes') {
            console.log(`'${answer}' is wrong answer. Correct answer was 'no'.\nLet's try again, ${name}!`);
            return;
        } else if (answer === 'no') {
            console.log(`'${answer}' is wrong answer. Correct answer was 'yes'.\nLet's try again, ${name}`);
            return;
        } else {
            console.log(`'${answer}' is wrong answer.\nLet's try again, ${name}`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}
gameIsEvenNumber();