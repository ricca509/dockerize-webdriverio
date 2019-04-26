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
  .createServer(function(request, response) {
    response.writeHeader(200, { "Content-Type": "text/html" });
    response.write(html);
    response.end();
  })
  .listen(PORT, () => console.log(`Listening on port ${PORT}! 🤗`));
