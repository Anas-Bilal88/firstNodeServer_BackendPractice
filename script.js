// Version from MAIN branch
const http = require('http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {

  console.log(res.statusCode);
  res.end("Hello Anas! That is your 1st Server.");
  console.log("Learning Git");
});

server.listen(3000, ()=>{
    console.log("Server run successfully.");
});

// Its my first node js server.