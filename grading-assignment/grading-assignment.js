function studentGradeGenerator(mark) {
  if (mark >= 80 && mark <= 100) {
    return "A";
  } else if (mark >= 60 && mark <= 79) {
    return "B";
  } else if (mark >= 49 && mark <= 59) {
    return "C";
  } else if (mark >= 40 && mark <= 48) {
    return "D";
  } else if (mark < 40 && mark >= 0) {
    return "E";
  } else {
    return "Invalid mark";
  }
}

function generateGrade() {
  let marks = parseInt(document.getElementById('marks').value, 10);
  let grade = studentGradeGenerator(marks);
  document.getElementById('result').innerText = `The grade is: ${grade}`;
}

// Attach the generateGrade function to the button click event
document.getElementById('generateButton').addEventListener('click', generateGrade);