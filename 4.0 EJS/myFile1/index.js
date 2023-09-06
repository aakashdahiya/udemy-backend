import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  let today = "today";
  res.render("index.ejs", {
    daytype: today,
  });
});

app.listen(port, () => {
  console.log(`listning to port ${port}`);
});
