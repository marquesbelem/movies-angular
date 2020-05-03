import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movies-angular';

  color: string;

  movies: any;

  constructor(
    private dataService: DataService,
    private modalService: NgbModal
  ) { }

  getTopRated(color: string) {
    this.color = color;

    return this.dataService
      .getMovies("top_rated")
      .subscribe(res => (this.movies = res.results));
  }

  getPopular(color: string) {
    this.color = color;

    return this.dataService
      .getMovies("popular")
      .subscribe(res => (this.movies = res.results));
  }

  getLatest(color: string) {
    this.color = color;

    return this.dataService
      .getMovies("latest")
      .subscribe(data => (this.movies = [data]));
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
    this.getLatest('#17a2b8');
  }
}
