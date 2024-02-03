const fs = require('fs');

function countStudents(path = 'database.csv') {
  try {
    const content = fs.readFileSync(path);
    const students = content.toString().trim().split('\n').slice(1);
    console.log(`Number of students: ${students.length}`);
    const studentMap = {};
    for (const student of students) {
      const studentInfo = student.split(',');
      const firstName = studentInfo[0];
      const field = studentInfo[3];
      if (!studentMap[field]) {
        studentMap[field] = [firstName];
      } else {
        studentMap[field].push(firstName);
      }
    }
    for (const stud of Object.keys(studentMap)) {
      const data = studentMap[stud];
      console.log(`Number of students in ${stud}: ${data.length}. List: ${data.join(', ')}`);
    }
  } catch (e) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
