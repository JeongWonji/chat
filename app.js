/* 설치한 express 모듈 불러오기 */
const express = require("express");
const chat = require("./src/apis/root");
const Chatting = require("./src/apis/chat/chat");

const http = require("http");
/* 설치한 socket.io 모듈 불러오기 */
const socket = require("socket.io");
/* express 객체 생성 */
const app = express();
/* express http 서버 생성 */
const server = http.createServer(app);

/* 생성된 서버를 socket.io에 바인딩 */
const io = socket(server);

app.use("/css", express.static("./public/css"));
app.use("/js", express.static("./public/js"));

app.use("/", chat);

Chatting.start(io);

server.listen(8080, () => {
  console.log("http://localhost:8080");
});
