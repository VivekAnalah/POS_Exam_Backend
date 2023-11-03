require("dotenv").config();
const express = require("express");

const cors = require("cors");

const PORT = process.env.PORT || 8080;
const connect = require("./src/Config/db");

const questionRoute = require("./src/Questions/question.route");
const answerRoute = require("./src/Answers/answers.route");

const app = express();

app.use(express.json());
app.use(cors());


app.use("/questions", questionRoute);
app.use("/answer", answerRoute);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`listening http://localhost:${PORT}`);
  } catch (e) {
    console.log(e);
  }
});



