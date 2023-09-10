const http = require("http");
port = 3000;

const jsonobject = {
  question: "what is node js and its features ?",
  answer:
    "Node.js is a runtime environment that allows you to run JavaScript code on the server-side. It's built on the V8 JavaScript engine developed by Google and is designed to be fast, efficient, and scalable for building networked applications. Here are some key features of Node.js, outlined point by point:",
  fetures:
    "Non-blocking, <li>asynchronous I/O for efficiency.<li>,Single-threaded event loop for handling many connections<li>..Fast execution with the V8 engine.<li>,npm for easy package management.,<li>Cross-platform compatibility.<li>An event-driven architecture.A robust community and ecosystem.<li>Scalability for handling concurrent connections.Built-in streaming support.<li>Open-source licensing.Well-suited for real-time applications.<li>Adoption by large companies like Netflix and PayPal.",
};

const app = http
  .createServer((request, response) => {
    if (request.url == "/aboutus") {
      response.write("<html>");
      response.write("<body");
      response.write("<H1>what is node js  ?");
      response.write(
        "<p>Node.js is a runtime environment that allows you to run JavaScript code on the server-side. It's built on the V8 JavaScript engine developed by Google and is designed to be fast, efficient, and scalable for building networked applications. Here are some key features of Node.js, outlined point by point:<p/>"
      );
      response.write(
        "<ul><li>Non-blocking, <li>asynchronous I/O for efficiency.<li>,Single-threaded event loop for handling many connections<li>..Fast execution with the V8 engine.<li>,npm for easy package management.,<li>Cross-platform compatibility.<li>An event-driven architecture.A robust community and ecosystem.<li>Scalability for handling concurrent connections.Built-in streaming support.<li>Open-source licensing.Well-suited for real-time applications.<li>Adoption by large companies like Netflix and PayPal.<ul/>"
      );

      response.write("<body/>");
      response.write("<html>");
      response.end();

      response.end();
    } else if (request.url == "/postapi") {
      const data = JSON.stringify(jsonobject);
      response.write(data);
      response.end();

      response.end();
    } else {
      response.write("kush");
      response.end();
    }
  })
  .listen(port, () => {
    console.log(`server is working right now on port. ${port}`);
  });
