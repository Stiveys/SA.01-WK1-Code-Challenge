function student_grade_generator(mark) {
if (mark > 79) {
    return 'A';
}
else if (mark >= 60) {
    return 'B';
}
else if (mark >= 49) {
    return 'C';
}
else if (mark >= 40) {
    return 'D';
}
else {
    return 'E';
}
}

function studentGradeGenerator() {
    const mark = parseFloat(prompt('Enter the student mark (0-100):'));

    if (isNan(mark) || mark < 0 || mark > 100) {
        return 'incorrect input. Kindly enter a correct mark between 0 and 100.';
    }

    const grade = studentGradeGenerator(mark);
    return `The student's mark is ${grade}`;
}

const fullResult = studentGradeGenerator();
console.log(fullResult);