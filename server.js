const express = require("express");
const app = express();

app.use(express.json());
const routes = require("./routes/routes");
app.use("/", routes);

app.get("/", (req, res) => {
  res.send("server connneting");
});

app.listen(3111, () => {
  console.log("Listening...");
});
