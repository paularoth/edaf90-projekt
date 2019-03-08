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
  private counterList;
  count;
  idList: any;
  private moviePosterList: Array<string> = [];

  constructor(
    private movieService: movieService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private counterService: counterService) {
  }

  ngOnInit() {
    this.idList = this.messageService.get();
    this.idList = this.viewUnique();
    this.idList.map(id => this.movieService.getMovies(id)
    .subscribe(value => this.moviePosterList.push(value.Poster)));

    this.counterList = this.getCounterList();
    var copyList = this.idList;
    this.counterListSubscribe(copyList);
  }

  getCounterList(){
    return this.counterService.sendCounterList();
  }

  counterListSubscribe(list) {
    for (var id in list){
      list[id] = this.counterList.addCounter()
      .subscribe({
        next: resp => this.count = resp,
        complete: () => {
          this.messageService.pop(),
          this.messageService.addHistory(this.moviePosterList.shift())
        },
      });
    }
  }

  viewUnique() {
    return this.idList.filter(this.findUnique);
  }

  findUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  removeMovie(id) {
    this.idList.filter(elem => elem == id);
  }
}




