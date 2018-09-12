import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {
  result: any;

  constructor(private _http: Http) {}

  getMovies() {
    return this._http
      .get("/api/movies")
      .pipe(map(result => (this.result = result.json())));
  }

  getMovieById(id) {
    return this._http
      .get("/api/movies/" + id)
      .pipe(map(result => (this.result = result.json())));
  }

  addMovie(movieData) {
    return this._http
      .post("/api/movies/", movieData)
      .pipe(map(result => (this.result = result.json())));
  }

  editMovie(id, movieData) {
    return this._http
      .put("/api/movies/" + id, movieData)
      .pipe(map(result => (this.result = result.json())));
  }

  deleteMovie(id) {
    return this._http
      .delete("/api/movies/" + id)
      .pipe(map(result => (this.result = result.json())));
  }
}
