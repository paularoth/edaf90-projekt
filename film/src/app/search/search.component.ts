import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { appmovie } from '../appmovie';
import { movieService } from '../appmovie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movies$: Observable<appmovie[]>;
  private searchTerms = new Subject<string>();
  
  constructor(private movieService: movieService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }
  
  ngOnInit(): void {
    this.movies$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.movieService.searchHeroes(term))
    );
  }

}
