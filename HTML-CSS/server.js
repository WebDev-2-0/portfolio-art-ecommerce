/* This code defines a Node.js HTTP server that listens to incoming requests on a specified port and sends back the appropriate response. It reads the file path requested in the URL and determines the MIME type of the file based on its file extension. If the file exists in the directory, it will be sent to the client as a response with an HTTP 200 code. If the file does not exist, the server sends an HTTP 404 error. If there is a server error in reading the file, the server sends an HTTP 500 error. Finally, the server logs the port it is currently listening to in the console.
*This file can be used as a basic template for creating a Node.js HTTP server that can handle requests for static files if you do not have a liveserver extension installed. It is useful for serving files such as HTML, CSS, JavaScript, images, and other static assets. 
*To use run cd in the HTML/CSS root directory and run "node server.js" in your terminal.
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  let filePath = "." + req.url;
  if (filePath === "./") {
    filePath = "./index.html";
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
    ".wav": "audio/wav",
    ".mp4": "video/mp4",
    ".woff": "application/font-woff",
    ".ttf": "application/font-ttf",
    ".eot": "application/vnd.ms-fontobject",
    ".otf": "application/font-otf",
    ".svg": "application/image/svg+xml",
  };

  const contentType = mimeTypes[extname] || "application/octet-stream";

  fs.readFile(filePath, function (error, content) {
    if (error) {
      if (error.code === "ENOENT") {
        res.writeHead(404);
        res.end("404 Not Found");
      } else {
        res.writeHead(500);
        res.end("500 Internal Server Error");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
