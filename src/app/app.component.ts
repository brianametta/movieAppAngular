import { Component } from "@angular/core";
import { DataService } from "./data.service";
import * as $ from "jquery";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  movies: Array<any>;
  movieToEdit = {
    title: "",
    director: "",
    releaseDate: ""
  };
  movieToAdd = {
    title: "",
    director: "",
    releaseDate: ""
  };

  constructor(private _dataService: DataService) {
    this._dataService.getMovies().subscribe(res => (this.movies = res));
  }

  addMovie(movieToAdd) {
    let newMovie = {
      title: movieToAdd.title,
      director: movieToAdd.director,
      releaseDate: movieToAdd.releaseDate
    };
    this._dataService.addMovie(newMovie).subscribe(movie => {
      this.movies.push(movie);
    });
  }

  // Fills in edit form in view when user clicks to edit a movie.
  getMovieForEditing(id) {
    this._dataService
      .getMovieById(id)
      .subscribe(res => (this.movieToEdit = res));
  }

  editMovie(id, movieToEdit) {
    let updatedMovie = {
      title: movieToEdit.title,
      director: movieToEdit.director,
      releaseDate: movieToEdit.releaseDate
    };

    this._dataService.editMovie(id, updatedMovie).subscribe(data => {
      this._dataService.getMovies().subscribe(res => (this.movies = res));
    });
  }

  deleteMovie(id) {
    this._dataService.deleteMovie(id).subscribe(data => {
      this._dataService.getMovies().subscribe(res => (this.movies = res));
    });
  }
}
