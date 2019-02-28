import { Component, OnInit } from '@angular/core';
import { movieService } from '../appmovie.service';
import { appmovie } from '../appmovie';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  movies;
  movie2;
  movie3;
  movie4;
  movie5;


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
      .subscribe(movie => this.movies = movie.Poster);

  }

  getFight(): void {
    this.movieService.getFight()
      .subscribe(movie => this.movie2 = movie.Poster);
  }
  getBat(): void {
    this.movieService.getBat()
      .subscribe(movie => this.movie3 = movie.Poster);
  }
  getRock(): void {
    this.movieService.getRock()
      .subscribe(movie => this.movie4 = movie.Poster);
  }
  getStar(): void {
    this.movieService.getStar()
      .subscribe(movie => this.movie5 = movie.Poster);
  }



}
