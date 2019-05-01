const http = require("http");

const PORT = 8000;
const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Docker tests</title>
  </head>
  <body>
    Docker test page
  </body>
  </html>
`;

http
  .createServer((req, res) => {
    console.log(`***** Incoming request ${req.url}`);
    res.writeHeader(200, { "Content-Type": "text/html" });
    res.write(html);
    res.end();
  })
  .listen(PORT, () => console.log(`Listening on port ${PORT}! 🤗`));
