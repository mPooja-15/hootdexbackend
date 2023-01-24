const express = require("express");
const router = require("./router/router")
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use("/app",router)

app.listen(3001, () => {
  console.log("port running");
});