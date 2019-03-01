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
    console.log(this.id);
    this.getMovies(this.id);



  }
  getMovies(data): void {
    this.movieService.getMovies(data)
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