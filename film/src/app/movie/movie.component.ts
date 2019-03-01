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

  }
  getMovies(): void {
    this.movieService.getMovie1()
      .subscribe(movie => {
        this.movies = movie,
          this.title = movie.Title,
          this.poster = movie.Poster,
          this.year = movie.Year,
          this.rating = movie.imdbRating,
          this.genre = movie.Genre,
          this.votes = movie.imdbVotes,
          this.plot = movie.Plot
      });
  }
}