import express from "Express";
const app = express();
const port = 3500;

app.get("/", (req, res) => {
  let name = "aakash";
  res.render("index.ejs", {
    myname: name,
  });
});


app.listen(port, (req, res) => {
  console.log(`server runnig on port ${port}`);
});
