import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  
  urlDefault = "https://api.themoviedb.org/3/movie/";
  key = "?api_key=1b04769d486e5b94cbf881c757b8db77";

  constructor(private _http: HttpClient) {}

  getMovies(_typeResq: string) {
    return this._http.get(this.urlDefault + _typeResq + this.key);
  }
}
