function studentGradeGenerator(mark) {

  if (mark >= 80 && mark <= 100) {
    console.log("A");

  } else if (mark >= 60 && mark <= 79) {
    console.log("B");

  } else if (mark >= 49 && mark <= 59) {
    console.log("C");

  } else if (mark >= 40 && mark <= 48) {
    console.log("D");

  } else if (mark < 40 && mark >= 0) {
    console.log("E");
    
  } else {
    console.log("Invalid mark");
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