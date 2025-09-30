require('dotenv').config();

const express = require("express"),
  app = express(),
  router = require("./routes/index"),
  bodyParser = require("body-parser"),
  cors = require("cors");
const sqlConnection = require("./config/sql.config");
const { initiatePassport } = require("./passport/util");

// Enable CORS
app.use(cors());

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));


app.get("/", (req, res) => {
  res.send("PHYSIO CRM API Service");
});

app.use((req, res, next) => {
  next();
});

router.init(app);
initiatePassport();

const PORT = process.env.PORT;
const APP_NAME = process.env.APP_NAME || 'PHYSIO CRM API Service';

console.log(`${APP_NAME} running on port: ${PORT}`);

app.listen(PORT);
