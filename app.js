const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const data = "Michael Peter";
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Lenght", data.length);
  res.write(data);
  res.end();
});

server.listen(8900, "localhost");
