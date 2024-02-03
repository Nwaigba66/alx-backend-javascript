const http = require('http');

const conn = { host: 'localhost', port: 1245 };
const app = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});
app.listen(conn, () => {
  console.log(`Server connected on ${conn.host}:${conn.port}`);
});

module.exports = app;
