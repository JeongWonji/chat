/* Node.js 기본 내장 모듈 불러오기 */
const fs = require("fs");

const process = {
  server: (request, response) => {
    fs.readFile("public/index.html", function (err, data) {
      if (err) {
        response.send("에러");
        throw err;
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
        response.end();
      }
    });
  },
};

module.exports = {
  process,
};
