# Simple Movie API

This is an example of a simple movie API using Express, referenced in the corresponding **Node.js & Express tutorial slides**.

## Start the project from scratch

Navigate to desired location on your computer using your console:
```bash
mkdir simple-movie-api​
cd simple-movie-api​
touch index.js​
npm init -y​
```


Install Express locally in your application:
```bash
npm install express --save
```

Create a movies.js file and insert json movie data into a movies variable:
```javascript
//movies.js

const movies = [
  {
    id: 0,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120
  },
  {
    id: 1,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180
  },
  {
    id: 2,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180
  }
];

module.exports = movies;
```

Configure your index.js file:
```javascript
// index.js​

const express = require("express");
const movies = require("./movies");
const port = 8000;
const app = express();
```

Retrieve the data from the json files. Add to index.js:

```javascript
...

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

```


## Download the completed project

Clone repository from GitHub by running the following in your console:

```bash
git clone https://github.com/ashleighmm/node-example.git
```

### Installation

Once you've downloaded or cloned the ***simple-movie-api*** project, ensure you are in the correct directory:

```bash
cd simple-movie-api
```

Install node dependencies (this uses the already configured package.json file):

```bash
npm install
```

## Usage

Run the movie API in your console:

```bash
npm start
```

Navigate to the following routes to see what is displayed:
- ​http://localhost:8000/
- http://localhost:8000/api/movies
- http://localhost:8000/api/movies/2
- http://localhost:8000/api/movies/4
