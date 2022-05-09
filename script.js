// #1
const submissions = [
  { name: "Jane", score: 95, date: 2020 - 01 - 24, passed: true },
  { name: "Joe", score: 77, date: 2018 - 05 - 14, passed: true },
  { name: "Jack", score: 59, date: 2019 - 07 - 05, passed: false },
  { name: "Jill", score: 88, date: 2020 - 04 - 22, passed: true },
];

// #2
const addSubmission = (array, newName, newScore, newDate) => {
  const newScoreRecord = {
    newScorePoints: newScore >= 60 ? true : false,
  };
  if (newScore >= 60) {
      newScoreRecord.newScorePoints = true;
  } else {
    newScoreRecord.newScorePoints = false;
  }
  array.push(newScoreRecord);
};

//#3
function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}

// #4
const deleteSubmissionByName = function (array, name) {
  const deleteByName = array.findIndex(
    (perSubmission) => perSubmission.name === name
  );
  array.splice(index, 1);
};

// #5
function editSubmission(array, index, score) {
  array[index].score = score;
  array[index].newScorePoints = score >= 60 ? true : false;
}
// editSubmission(submissions, 60);
// console.log(editSubmission(submissions, 60));

// #6
const findSubmissionByName = function (array, name) {
  const foundByName = array.find((person) => person.name === name);
  return foundByName;
};
findSubmissionByName(submissions, "Jane");
console.log(findSubmissionByName(submissions, "Jane"));

// #7
function findLowestScore(array) {
  let lowest = 0;
  if (lowest < score.length) {
    return student.forEach((student) => console.log(student.score));
  };
}
console.log();

// #8
function findAverageScore(array) 
