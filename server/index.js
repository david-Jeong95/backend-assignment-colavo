const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const morgan = require("morgan");
const Router = require("./routes/index");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(express.json());

app.use("/", Router);

app.get("/", (req, res) => {
  res.status(200).send("서버가 실행중입니다.");
});

app.use((req, res, next) => {
  res.status(404).send("404 페이지를 찾을 수 없습니다.");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("에러 났습니다.");
});

app.listen(PORT, () => {
  console.log(`${PORT}번 포트에서 실행중입니다.`);
});
