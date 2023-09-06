import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("tiny")); // app is a method; inside "" the format is specified [tiny,combined]

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
