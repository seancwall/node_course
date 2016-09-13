var grades = [100, 50, 75, 80];
var totalGrade = 0;

grades.forEach(function(grade) {
  totalGrade += grade;
});

console.log(totalGrade / grades.length);
