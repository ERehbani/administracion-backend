const express = require("express");
const router = require("./routes/users.router");
require("./database")

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
