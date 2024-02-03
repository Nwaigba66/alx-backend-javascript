const http = require('http');
const fs = require('fs');

const errorMessage = 'Cannot load the database';
const database = process.argv[2];
const conn = { host: 'localhost', port: 1245 };
const app = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') res.end('Hello Holberton School!');
  else if (url === '/students') {
    res.write('This is the list of our students');
    new Promise((resolve, reject) => {
      fs.readFile(database, (err, data) => {
        if (!err) {
          const db = data.toString('utf-8').trim().split('\n').slice(1);
          res.write(`\nNumber of students: ${db.length}`);
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
            res.write(`\nNumber of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
          }
          res.end();
          resolve();
        } else {
          reject(new Error(errorMessage));
        }
      });
    }).then()
      .catch(() => {
        res.write(`\n${new Error(errorMessage)}`);
        res.end('');
      });
  } else res.end('');
});
app.listen(conn, () => {
  console.log(`Server connected on ${conn.host}:${conn.port}`);
});

module.exports = app;
