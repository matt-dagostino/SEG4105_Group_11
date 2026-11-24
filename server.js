const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("SmartRoute AI placeholder container running\n");
});

server.listen(8080, "0.0.0.0", () => {
  console.log("Server listening on port 8080");
});