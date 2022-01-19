const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    return res.end("Hello");
  }

  if (req.url === "/about") {
    return res.end("here is our short history");
  }

  res.end(`<h1>SORRY!</h1>
  <p>The site you are looking for can not be found</p>
  <a href="/">back home</a>`);
});

server.listen(5000);
