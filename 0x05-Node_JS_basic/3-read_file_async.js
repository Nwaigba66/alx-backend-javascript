const fs = require('fs');

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (!err) {
        const db = data.toString('utf-8').trim().split('\n').slice(1);
        console.log(`Number of students: ${db.length}`);
        const studentMap = {};
        for (const stud of db) {
          const info = stud.split(',');
          const firstName = info[0];
          const field = info[3];
          if (!studentMap[field]) {
            studentMap[field] = [firstName];
          } else {
            studentMap[field].push(firstName);
          }
        }
        for (const key of Object.keys(studentMap)) {
          const value = studentMap[key];
          console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
        }
        return resolve();
      }
      return reject(new Error('Cannot load the database'));
    });
  });
}

module.exports = countStudents;
