const express = require("express");
const hp = require("./routes/hproutes");
const path = require("path");

const app = express();
const port = 3000;
app.use(express.json());
//app.use(express.static(path.join(__dirname, "public")));

app.use("/", hp);
app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});
