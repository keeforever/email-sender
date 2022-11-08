require("dotenv").config();
require("express-async-errors");

// express
const express = require("express");
const app = express();


// middleware
app.use(express.json());

// route
const emailRouter = require("./routes/sendEmail");
app.use("/api/v1", emailRouter);

app.get("/", (req, res) => {
  res.send("<h3>Send Email</h3><a href='/api/v1/send' >send</a>");
});

//port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`port ${port} connected successfully.`);
});
