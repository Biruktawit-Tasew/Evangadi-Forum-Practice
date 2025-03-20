const express = require("express");
const cors = require("cors");
const app = express();
const port = 2017;

// Database Connection
const db = require("./db/dbConfig");

//Importing userRoutes
const userRoutes = require("./Routes/userRoute");
//Importing questionRoutes
const questionRoute = require("./Routes/questionRoute");
const { StatusCodes } = require("http-status-codes");
// json middleware to extract json data
app.use(express.json());
//cors policy
app.use(cors());
// user route middleware
app.use("/api/users", userRoutes);

// Question route middleware
app.use("/api/question", questionRoute);
// Answers Route middleware
app.use("/api/answer", questionRoute);
app.get("/", (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "It is working" });
});
async function start() {
  try {
    const result = await db.execute("select 'test'");
    await app.listen(port);
    console.log("Database Connected Successfully");
    console.log(`Server is Listenning on http://localhost:${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();
https://evangadi.com/
//command to create table on mysql


// CREATE TABLE if not exists registration(
// user_id INT(20) NOT NULL AUTO_INCREMENT,
// username VARCHAR(20) NOT NULL,
// email VARCHAR(40) NOT NULL,
// password VARCHAR(100) NOT NULL,
// PRIMARY KEY (user_id)
// );

// CREATE TABLE if not exists profile(
// user_profile_id INT(20) NOT NULL AUTO_INCREMENT,
// user_id INT(20) NOT NULL,
// firstname VARCHAR(20) NOT NULL,
// lastname VARCHAR(20) NOT NULL,
// PRIMARY KEY (user_profile_id),
// FOREIGN KEY (user_id) REFERENCES registration(user_id));

// CREATE TABLE if not exists questions(
// id INT(20) NOT NULL AUTO_INCREMENT,
// question_id VARCHAR(100) NOT NULL UNIQUE,
// user_id INT(20) NOT NULL,
// title VARCHAR(50) NOT NULL,
// description TEXT NOT NULL,
// tag VARCHAR(255),
// created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// PRIMARY KEY (id,question_id),
// FOREIGN KEY (user_id) REFERENCES registration(user_id));

// CREATE TABLE if not exists answers(
// answer_id INT(20) NOT NULL AUTO_INCREMENT,
// user_id INT(20) NOT NULL,
// question_id VARCHAR(100) NOT NULL,
// answer TEXT NOT NULL,
// created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
// PRIMARY KEY (answer_id),
// FOREIGN KEY (question_id) REFERENCES questions(question_id),
// FOREIGN KEY (user_id) REFERENCES registration(user_id)
// );
