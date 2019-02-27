import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appmovie } from './appmovie';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class movieService {
    private movieURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=97021fa0';

    constructor(
        private http: HttpClient) {
    }

    /** GET movies from the server */
    getMovies(): Observable<appmovie[]> {
        return this.http.get<appmovie[]>(this.movieURL)
            .pipe(tap(movies => console.log(movies)));
    }
}
