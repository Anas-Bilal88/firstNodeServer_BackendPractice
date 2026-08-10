const http = require('http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {

  console.log(res.statusCode);
  res.end("Hello Anas! That is your 1st Server.");
  
});

server.listen(3000, ()=>{
    console.log("Server run successfully.");
});
