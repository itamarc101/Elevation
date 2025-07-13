const prompt = require('prompt-sync')({ sigint: true });

const questions = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What year is it?", answer: new Date().getFullYear().toString() }
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
    const userAns = prompt(`Question ${i+1}: ${questions[i].question} `).trim();

    if (userAns.toLowerCase() === questions[i].answer.toLocaleLowerCase()) {
        score++;
    }
}

console.log(`Final Score: ${score}/${questions.length} correct!`);
