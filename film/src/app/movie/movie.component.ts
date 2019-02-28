import { Component, OnInit } from '@angular/core';
import { appmovie } from '../appmovie';
import { movieService } from '../appmovie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies: {};
  title: {};
  year: {};
  poster: {};
  plot: {};
  rating: {};
  genre: {};
  votes: {};



  constructor(private movieService: movieService) { }

  ngOnInit() {
    this.getMovies();
    this.getTitle();
    this.getYear();
    this.getPoster();
    this.getPlot();
    this.getRates();
    this.getGenre();
    this.getVotes();


  }
  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movie => this.movies = movie);
  }
  getTitle(): void {
    this.movieService.getMovies()
      .subscribe(movie => this.title = movie.Title);
  }
  getYear(): void {
    this.movieService.getMovies()
      .subscribe(movie => this.year = movie.Year);
  }
  getPoster(): void {
    this.movieService.getMovies()
      .subscribe(movie => this.poster = movie.Poster);
  }
  getPlot(): void {
    this.movieService.getMovies()
      .subscribe(movie => this.plot = movie.Plot);
  }
  getRates(): void {
    this.movieService.getMovies()
      .subscribe(movie => this.rating = movie.imdbRating);
  }
  getGenre(): void {
    this.movieService.getMovies()
      .subscribe(movie => this.genre = movie.Genre);
  }
getVotes(): void {
  this.movieService.getMovies().subscribe(movie => this.votes = movie.imdbVotes);
}






}