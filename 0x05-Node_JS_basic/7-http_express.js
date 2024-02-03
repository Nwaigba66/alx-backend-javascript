const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const errorMessage = 'Cannot load the database';
const database = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let message = 'This is the list of our students';
  new Promise((resolve, reject) => {
    fs.readFile(database, (err, data) => {
      if (!err) {
        const db = data.toString('utf-8').trim().split('\n').slice(1);
        message += `\nNumber of students: ${db.length}`;
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
          message += `\nNumber of students in ${key}: ${value.length}. List: ${value.join(', ')}`;
        }
        res.send(message);
        resolve();
      } else {
        reject(new Error(errorMessage));
      }
    });
  }).then()
    .catch(() => {
      message += `\n${new Error(errorMessage)}`;
      res.send(message);
    });
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

module.exports = app;
