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
  movieToEdit: Array<any>; //todo you can get rid of the ng if bug
  movieToAdd = {
    title: "",
    director: "",
    releaseDate: ""
  };

  constructor(private _dataService: DataService) {
    this._dataService.getMovies().subscribe(res => (this.movies = res));
  }

  // addMovie(movieToAdd) {
  //   console.log(this.movieToAdd);
  //   this._dataService.addMovie(movieToAdd);
  // }

  addMovie(movieToAdd) {
    var newMovie = {
      title: movieToAdd.title,
      director: movieToAdd.director,
      releaseDate: movieToAdd.releaseDate
    };
    this._dataService.addMovie(newMovie).subscribe(movie => {
      this.movies.push(movie);
    });
  }

  getMovieForEditing(id) {
    this._dataService
      .getMovieById(id)
      .subscribe(res => (this.movieToEdit = res));
  }

  editMovie(id, movieToEdit) {
    console.log(this.movieToEdit);
    var updatedMovie = {
      title: movieToEdit.title,
      director: movieToEdit.director,
      releaseDate: movieToEdit.releaseDate
    };
    // this._dataService.editMovie(id, updatedMovie).subscribe(movie => {
    //   this.movies.push(movie);
    // });
    this._dataService.editMovie(id, updatedMovie).subscribe(function(data) {
      //this.movies = data;
    });
  }
}
