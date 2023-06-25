const { readdirSync } = require("fs");
const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cookieParser());

// routes middleware
readdirSync("./routes").map((r) =>
  app.use("/api/v1", require(`./routes/${r}`))
);

// server
const port = process.env.PORT || 8000;

// Connect to DB and start server
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server Running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
