var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs("mongodb://SPECIALMONGODBLINK", ["movies"]);

// Retrieves all movies from movies collection.
router.get("/movies", function(req, res, next) {
  db.movies.find(function(err, movies) {
    if (err) {
      next(err);
    } else {
      res.json(movies);
    }
  });
});

// Retrieves a movie by id from movies collection.
router.get("/movies/:id", function(req, res, next) {
  db.movies.findOne({ _id: mongojs.ObjectId(req.params.id) }, function(
    err,
    movie
  ) {
    if (err) {
      next(err);
    } else {
      res.json(movie);
    }
  });
});

// Creates a new movie in movies collection.
router.post("/movies", function(req, res, next) {
  var movie = req.body;
  if (!movie.title || !movie.director || !movie.releaseDate) {
    res.status(400);
    res.json({
      message: "Request must include title, director, and release date."
    });
  } else {
    db.movies.save(movie, function(err, movie) {
      if (err) {
        next(err);
      } else {
        res.json(movie);
      }
    });
  }
});

// Updates a specified movie by id.
router.put("/movies/:id", function(req, res, next) {
  var movie = req.body;

  if (!movie.title || !movie.director || !movie.releaseDate) {
    res.status(400);
    res.json({
      message: "Request must include title, director, and release date."
    });
  } else {
    db.movies.update(
      { _id: mongojs.ObjectId(req.params.id) },
      movie,
      {},
      function(err, movie) {
        if (err) {
          next(err);
        } else {
          res.json(movie);
        }
      }
    );
  }
});

// Delete a specified movie by id.
router.delete("/movies/:id", function(req, res, next) {
  db.movies.remove({ _id: mongojs.ObjectId(req.params.id) }, function(
    err,
    movie
  ) {
    if (err) {
      next(err);
    } else {
      res.json(movie);
    }
  });
});

module.exports = router;
