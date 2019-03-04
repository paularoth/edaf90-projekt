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

export class ViewComponent implements OnInit {
  private counterList: Array<Observable<number>> = [];
  count;
  list: any;
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
    this.counterService.onSave().subscribe({
      next: resp => this.count = resp,
      complete: () => {
        this.messageService.pop(),
          this.messageService.addHistory(this.movies.shift())
      },
    });
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




