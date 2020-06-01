const express = require("express");
const movies = require("./movies");
const port = 8000;
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my movie list");
});

app.get("/api/movies", (req, res) => {
  res.status(200).json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const movie = movies.find(movie => {
    return movie.id === Number(req.params.id);
  });
  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(404).send("Movie not found");
  }
});

app.listen(port, (err) => {
  if(err) {
    throw new Error('Something went wrong')
  }
  console.log(`Server is runing on ${port}`);
});
