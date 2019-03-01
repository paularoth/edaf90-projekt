import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieService } from '../appmovie.service';
import { appmovie } from '../appmovie';
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
  movie;
  array;
  constructor(private movieService: movieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params =>
      this.id = params.get('imdb'))
    this.movieService.getMovies(this.id).subscribe(resp => this.movie = resp.Poster);
  }



  saveMovie() {
    const hello = Observable.create(function (observer) {
      observer.next(this.movie);
      observer.next('World');

      return hello;
    });


  }

  removeMovie() {

  }
}

