require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const moviesRouter = require("./routes/movies-routes");
const reviewsRouter = require("./routes/reviews-routes");
const clubsRouter = require("./routes/clubs-routes");
const genresRouter = require("./routes/genre-routes");
const usersRouter = require("./routes/users-routes");

const app = express();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("MongoDB Connection Succeeded.");
  })
  .catch((error) => {
    console.log("Error in DB connection: " + error);
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use("/api/movies", moviesRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api/clubs", clubsRouter);
app.use("/api/genres", genresRouter);
app.use("/api/users", usersRouter);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headersSent) return next(error);
  res.status(error.code || 500).json({ message: error.message || "An unknown error occurred!" });
});

app.listen(5000);