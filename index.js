const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

require("./routes.js")(app);

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Database Connected Successfully..........");
    app.listen(PORT, () => {
      console.log(`listening at port http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log("Database Connection Error:", err));

app.get("/", (req, res) => {
  res.status(200).send("Hello World!!!");
});
