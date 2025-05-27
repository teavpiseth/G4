const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url == "/") {
    response.write("<html><head><title>Home</title></head>");
    response.write(
      `<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">Submit</button></form></body>`
    );
    response.write("</html>");
    response.end();
  }

  if (request.url === "/message" && request.method === "POST") {
    let body = "";

    request.on("data", (chunk) => {
      //20mb
      body += chunk.toString();
    });

    request.on("end", () => {
      const message = body.split("=")[1]; // decodeURIComponent() is safer
      console.log("Received message:", message);

      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(`<h1>User submitted: ${message}</h1>`);
    });
  }
});

server.listen(3033, () => {
  console.log("Server is running on port 3033");
});
