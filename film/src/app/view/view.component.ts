import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieService } from '../appmovie.service';
import { catchError, map, tap, filter, toArray, take } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  private id: any;
  list;
  private sub: any;
  subscription: Subscription;
  private movies: Array<string> = [];

  constructor(private movieService: movieService, private route: ActivatedRoute,
    private messageService: MessageService) { }

  ngOnInit() {

    this.list = this.messageService.get();

    console.log(this.list);
    this.list.map(id => this.movieService.getMovies(id).subscribe(value => this.movies.push(value.Poster)))
    console.log(this.movies);
  }
  saveMovie() {
    this.sub = this.route.paramMap.subscribe(params =>
      this.id = params.get('imdb'))
    this.movieService.getMovies(this.id).subscribe(value => this.movies.push(value.Poster));

  }

  removeMovie() {

  }
}

