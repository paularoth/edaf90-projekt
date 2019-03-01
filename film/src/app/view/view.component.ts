import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieService } from '../appmovie.service';
import { catchError, map, tap, filter, toArray, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public data$: [];
  private id: any;
  private sub: any;
  private movies: Array<string> = [];
  constructor(private movieService: movieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.saveMovie();
  }



  saveMovie() {
    this.sub = this.route.paramMap.subscribe(params =>
      this.id = params.get('imdb'))
    this.movieService.getMovies(this.id).subscribe(value => this.movies.push(value.Poster));
    console.log(this.movies);

  }

  removeMovie() {

  }
}

