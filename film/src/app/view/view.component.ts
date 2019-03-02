import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieService } from '../appmovie.service';
import { MessageService } from '../message.service';
import { Observable, timer } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit, OnChanges {
  counter$: Observable<number>;

  count = 30;
  list;
  private movies: Array<string> = [];
  constructor(private movieService: movieService, private route: ActivatedRoute,
    private messageService: MessageService) { }

  ngOnInit() {
    const timer$ = timer(30000);
    this.list = this.messageService.get();
    this.list = this.viewUnique();
    this.list.map(id => this.movieService.getMovies(id).subscribe(value => this.movies.push(value.Poster)));
    this.counter$ = timer(0, 1000).pipe(takeUntil(timer$), map(() => --this.count));
  }

  ngOnChanges() {
    this.counter$ = timer(0, 1000).pipe(take(this.count), map(() => --this.count));
  }

  viewUnique() {
    return this.list.filter(this.findUnique);
  }
  findUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  removeMovie(id) {
    this.list.filter(elem => elem == id);

  }
}




