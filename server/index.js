const express = require("express");
const cors = require("cors");
const authRouter = require("./route/auth.route");
const connection = require("./config/db");

require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.text());

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send(
    "This is HomePage if its visiable for you its mean your express app running fine..."
  );
});

app.post("/post", (req, res) => {
  res.send("got it");
});

app.listen(PORT, async () => {
  try {
    await connection;
  } catch {
    console.log("there error in connecting to mongodb");
  }
  console.log(`started at ${PORT}`);
});
