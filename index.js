const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = "5000";
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
  .connect(
    "mongodb+srv://savanupadhyay94:qad2fgzOhmNtB5Nu@savan.vsqrq.mongodb.net/"
  )
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
