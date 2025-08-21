#!/usr/bin/env node
import _ from 'lodash';
import readlineSync from "readline-sync";
import nameGreeting from "../../src/index.js";

const calc = () => {
  const name = nameGreeting();
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const number1 = _.random(0, 10);
    const number2 = _.random(0, 10);

    const expressions = [
      {'+': number1 + number2},
      {'-': number1 - number2},
      {'*': number1 * number2}
    ]

    const randomIndexExpretion = _.random(0, expressions.length - 1);
    const randomExpression = expressions[randomIndexExpretion];
    
    const sign = Object.keys(randomExpression);
    const resultExpretion = Object.values(randomExpression);

    const userAnswer = readlineSync.question(`Question: ${number1} ${sign[0]} ${number2} = `);
    const changeTypeOfUserAnswer = Number(userAnswer);

    if (changeTypeOfUserAnswer === resultExpretion[0]) {
      console.log('Correct!');
    } else {
      console.log(`Your answer: ${userAnswer}\n'${userAnswer}' is wrong answer. Correct answer was '${resultExpretion}'\nLet's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}

calc();