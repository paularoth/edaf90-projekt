import { Component, OnInit, Input } from '@angular/core';
import { movieService } from '../appmovie.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';


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
  awards: {};


  constructor(private movieService: movieService,
    private route: ActivatedRoute,
    private messageService: MessageService) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params =>
      this.id = params.get('imdb'))
    this.getMovies(this.id);
  }
  onRent(id) {
    this.messageService.add(id);
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
        this.awards = movie.Awards;

      });
  }
}