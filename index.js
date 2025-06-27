const express = require("express"),
  app = express(),
  router = require("./routes/index"),
  bodyParser = require("body-parser");
const connectDB = require("./config/mongodb.config");

const mongoURI = `mongodb://localhost:27017/crm-database`;

connectDB(mongoURI);

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

app.get("/", (req, res) => {
  res.send("PHYSIO CRM API Service");
});

app.use((req, res, next) => {
  next();
});

router.init(app);

// router.init(app);
console.log(`PHYSIO CRM API Service running on :${9005}`);

app.listen(9005);
