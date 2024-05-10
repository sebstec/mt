import { createServer } from "http";

function logger(req, res, i) {
  console.log({
    request: i,
    time: new Date(),
    method: req.method,
    url: req.url,
    urlDecoded: decodeURIComponent(req.url),
    statusCode: res.statusCode,
    statusMessage: res.statusMessage,
    host: req.headers["host"],
    agent: req.headers["user-agent"],
  });
}

let i = 0;

const server = createServer((req, res) => {
  if (req.url.includes("/now")) {
    logger(req, res, i);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ now: new Date() }));
    res.end();
  } else if (req.url.includes("/reflect")) {
    logger(req, res, i);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); // convert Buffer to string
    });
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "application/json" });
      console.log("body:", {
        body: body,
        bodyDecoded: decodeURIComponent(body),
      });
      res.write(
        JSON.stringify({
          url: req.url,
          urlDecoded: decodeURIComponent(req.url),
          method: req.method,
          statusMessage: res.statusMessage,
          statusCode: res.statusCode,
          body: body,
          bodyDecoded: decodeURIComponent(body),
        }),
      );
      res.end();
    });
  } else {
    logger(req, res, i);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello there");
    res.end();
  }
  i = i + 1;
});

const port = 3000;

server.listen(port);

console.log(`server running on port ${port}`);
