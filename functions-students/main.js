const createStudent = (givenName, givenGrade) => {
  const student = {
    name: givenName,
    grade: givenGrade
  }
  return student;
}

const addMathGrade = (studentObj) => {
  studentObj.math = "B"
  return studentObj;
}

const addHistoryGrade = (studentObj) => {
  studentObj.history = "C"
  return studentObj;
}

const addScienceGrade = (studentObj) => {
  studentObj.science = "A"
  return studentObj;
}

newStudent = createStudent("Seaborn", 11);
mathStudent = addMathGrade(newStudent)
historyStudent = addHistoryGrade(mathStudent)
scienceStudent = addScienceGrade(historyStudent)

console.log(scienceStudent);