let studentScores = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81]

function getLetterGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    else return 'F';
}

let gradesArr = studentScores.reduce((letter, score) => {
    const grade = getLetterGrade(score);
    letter[grade] = (letter[grade] || 0) + 1;
    return letter
}, { A: 0, B: 0, C: 0, F: 0 } )

console.log(gradesArr)