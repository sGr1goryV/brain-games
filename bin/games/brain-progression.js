#!/usr/bin/env node
import _ from 'lodash';
import readlineSync from "readline-sync";
import nameGreeting from "../../src/index.js";



const makeProgression = () => {
    const startProgression = _.random(0, 50);     //need to make random number
    const step = _.random(0, 10);                 //need to make random number
    const lengthProgression = _.random(5, 10);   //need to make random numbers 5 to 10
    let currentElement = 0;
    const arrProgression = [];

    for (let i = 0; i < lengthProgression; i += 1) {
        currentElement = startProgression + i * step;
        arrProgression.push(currentElement);
    }
    return arrProgression;
}

const brainProgression = () => {

    const name = nameGreeting();

    for (let i = 0; i < 3; i += 1) {
        const progression = makeProgression();
        const randomIndex = _.random(0, progression.length - 1);

        const randomItem = progression[randomIndex];
        progression[randomIndex] = '..';
        const question = readlineSync.question(`Question: ${progression}\nYour answer: `);
        const answer = Number(question);

        if (answer === randomItem) {
            console.log('Correct!');
        } else {
            console.log(`'${answer}' is wrong answer! is wrong answer. Correct answer was '${randomItem}'\nLet's try again, ${name}`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`)


}
brainProgression()