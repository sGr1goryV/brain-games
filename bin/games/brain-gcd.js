#!/usr/bin/env node
import _ from 'lodash';
import readlineSync from "readline-sync";
import nameGreeting from "../../src/index.js";


const gcd = () => {
  const name = nameGreeting();

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    let a = _.random(0, 50);
    let b = _.random(0, 50);

    const question = readlineSync.question(`Question: ${a} ${b}\n\nYour answer: `);
    const answer = Number(question);

    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }

    if (a === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer! is wrong answer. Correct answer was '${a}'\nLet's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`)
}

gcd();