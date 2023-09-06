import express from "express";
const app = express();
const port = 3000;

let bowl = ["apple", "pear", "banana", "grapes"];
app.get("/", (req, res) => {
  res.render("index.ejs", { fruits: bowl });
});

app.listen(port, (req, res) => {
  console.log("listning to port " + port);
});
