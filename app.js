const http = require('http');
const date = require('my_module');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile("index.html", function(err, data) {
        res.writeHead(200, {"Content-Type": "text, html"});
        res.write(data);
        res.write("The current time is: "+date.getDate());
        res.end();
    })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
