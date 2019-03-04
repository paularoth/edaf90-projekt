import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieService } from '../appmovie.service';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';
import { counterService } from '../counter.service'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit, OnChanges {
  private counterList: Array<Observable<number>> = [];
  counter$: Observable<number>;
  list;
  private movies: Array<string> = [];

  constructor(
    private movieService: movieService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private counterService: counterService) {
  }

  ngOnInit() {
    this.list = this.messageService.get();
    this.list = this.viewUnique();
    this.list.map(id => this.movieService.getMovies(id).subscribe(value =>
      this.movies.push(value.Poster)));
    this.counter$ = this.counterService.onSave();
  }

  ngOnChanges() {
    this.counter$ = this.counterService.onChange();
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




