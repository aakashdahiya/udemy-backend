import express from "express";
const app = express();
const port = 4000;

app.set("view engine", "ejs"); // Set EJS as the template engine

app.get("/", (req, res) => {
  const data = { name: "Aakash" };
  res.render("index.ejs", { data }); // Render the 'index.ejs' template with data
});

app.listen(port, (req, res) => {
  console.log(`listing on port ${port}`);
});
