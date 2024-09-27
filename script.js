
// Arrays to store questions and correct answers
const questions = [
    "What is your name",
        "what is the capital of pakistan",
        "Which is the highest mountain peak in the world?",
        "Which is the largest continent?",
        "what is 5+5",
];

const correctAnswers = [
   "Umer",
    "Islamabad",
    "Mount Everest",
    "Asia",
    "10",
];

// Variables to keep track of scores
let correctCount = 0;
let wrongCount = 0;

// Loop through the questions
for (let i = 0; i < questions.length; i++) {
    const userAnswer = prompt(questions[i]); // Prompt user for answer
    if (userAnswer === correctAnswers[i]) {
        correctCount++; // Increment correct count
        alert("Correct!");
    } else {
        wrongCount++; // Increment wrong count
        alert(`Wrong! The correct answer is ${correctAnswers[i]}.`);
    }
}

// Calculate total score
const totalScore = correctCount;

// Display the score and performance message
alert(`You got ${totalScore} out of ${questions.length} correct!`);

// Nested if for grading
if (totalScore === questions.length) {
    alert("Grade: A! Excellent work!");
} else if (totalScore >= questions.length * 0.8) {
    alert("Grade: B! Good job!");
} else if (totalScore >= questions.length * 0.6) {
    alert("Grade: C. You passed!");
} else {
    alert("Grade: D. Better luck next time!");
}
