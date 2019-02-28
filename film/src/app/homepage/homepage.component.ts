import { Component, OnInit } from '@angular/core';
import { appmovie } from '../appmovie';
import { movieService } from '../appmovie.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  movies: appmovie[];
  movie2: appmovie[];
  movie3: appmovie[];
  movie4: appmovie[];
  movie5: appmovie[];


  constructor(private movieService: movieService) { }

  ngOnInit() {
    this.getMovies();
    this.getFight();
    this.getBat();
    this.getRock();
    this.getStar();

  }
  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movie => this.movies = movie);
  }

  getFight(): void {
    this.movieService.getFight()
      .subscribe(movie => this.movie2 = movie);
  }
  getBat(): void {
    this.movieService.getBat()
      .subscribe(movie => this.movie3 = movie);
  }
  getRock(): void {
    this.movieService.getRock()
      .subscribe(movie => this.movie4 = movie);
  }
  getStar(): void {
    this.movieService.getStar()
      .subscribe(movie => this.movie5 = movie);
  }



}
