import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));

function brandnamegenerator(req, res, next) {
  console.log(req.body);
  // Corrected the variable name to bandName
  var bandName = req.body["street"] + req.body["pet"];
  // Store bandName in req object to access it in other routes
  // req.bandName = bandName;
  next();
}

app.use(brandnamegenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  // Access bandName from the req object
  const bandName = req.bandName;
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
