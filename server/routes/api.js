var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs("<secretLinkToApi>", ["movies"]);

router.get("/movies", function(req, res, next) {
  db.movies.find(function(err, movies) {
    if (err) {
      res.send(err);
    } else {
      res.json(movies);
    }
  });
});

router.get("/movies/:id", function(req, res, next) {
  db.movies.findOne({ _id: mongojs.ObjectId(req.params.id) }, function(
    err,
    movie
  ) {
    if (err) {
      res.send(err);
    } else {
      res.json(movie);
    }
  });
});

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
        res.send(err);
      } else {
        res.json(movie);
      }
    });
  }
});

router.put("/movies/:id", function(req, res, next) {
  var movie = req.body;
  var updatedMovie = {};

  if (!movie.title || !movie.director || !movie.releaseDate) {
    res.status(400);
    res.json({
      message: "Request must include title, director, and release date."
    });
  } else {
    updatedMovie.title = movie.title;
    updatedMovie.director = movie.director;
    updatedMovie.releaseDate = movie.releaseDate;
    db.movies.update(
      { _id: mongojs.ObjectId(req.params.id) },
      updatedMovie,
      {},
      function(err, movie) {
        if (err) {
          res.send(err);
        } else {
          res.json(movie);
        }
      }
    );
  }
});

router.delete("/movies/:id", function(req, res, next) {
  db.movies.remove({ _id: mongojs.ObjectId(req.params.id) }, function(
    err,
    movie
  ) {
    if (err) {
      res.send(err);
    } else {
      res.json(movie);
    }
  });
});

module.exports = router;
