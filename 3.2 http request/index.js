import express from "express";

const app = express();
const port = 3500;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>hello world</h1>`);
});

app.get("/about", (req, res) => {
  res.send("<h1>about us page</h1>");
});
