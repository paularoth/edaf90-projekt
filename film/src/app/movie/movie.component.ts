import { Component, OnInit } from '@angular/core';
import { appmovie } from '../appmovie';
import { movieService } from '../appmovie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies: appmovie[];
  constructor(private movieService: movieService) { }

  ngOnInit() {
    this.getMovies();
  }
  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movie => this.movies = movie);
  }

}