const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
dotenv.config();

mongoose
   .connect(process.env.MONGO_URI, { useUnifiedTopology: true })
   .then(() => {
      console.log("Connected to the database");
   })
   .catch((err) => {
      console.log(err);
   });

app.use(express.json());

app.use("/api/post", postRoutes);
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(5000, () => console.log("Now listening on port " + PORT));
