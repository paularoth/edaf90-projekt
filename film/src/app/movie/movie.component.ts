import { Component, OnInit, Input } from '@angular/core';
import { appmovie } from '../appmovie';
import { movieService } from '../appmovie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() id: string;
  private sub: any;
  movies: {};
  title: {};
  year: {};
  poster: {};
  plot: {};
  rating: {};
  genre: {};
  votes: {};
  imdbId: {};



  constructor(private movieService: movieService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.paramMap.subscribe(params =>
      this.id = params.get('imdb'))
    this.getMovies('tt1727824');



  }
<<<<<<< HEAD
  getMovies(data): void {
    this.movieService.getMovies(data)
=======
  getMovies(): void {
    this.movieService.getMovie1()
>>>>>>> b79b657285fcaeb1b8c889694d0343616fcb2826
      .subscribe(movie => {
        this.imdbId = movie.imdbID,
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