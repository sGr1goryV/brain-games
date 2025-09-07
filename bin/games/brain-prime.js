#!/usr/bin/env node
import _ from 'lodash';
import readlineSync from "readline-sync";
import nameGreeting from "../../src/index.js";


function isPrime(n) {
    if (n < 2) {
        return 'no';
    } else if (n === 2) {
        return 'yes'
    }
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return 'no';
        }
    }
    return 'yes';
}


const brainPrime = () => {
    const name = nameGreeting();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    for (let i = 0; i < 3; i += 1) {
        const randomNumber = _.random(0, 50);
        const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);

        if (isPrime(randomNumber) === answer) {
            console.log('Correct!');
        } else if (isPrime(randomNumber)) {
            console.log(`'${answer}' is wrong answer. Correct answer was '${isPrime(randomNumber)}'.\nLet's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`)
}
brainPrime();