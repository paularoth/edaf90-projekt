import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appmovie } from './appmovie';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class movieService {
    private gardian = 'http://www.omdbapi.com/?i=tt3896198&apikey=97021fa0';
    private star = 'http://www.omdbapi.com/?i=tt1517451&apikey=97021fa0';
    private bat = 'http://www.omdbapi.com/?i=tt0468569&apikey=97021fa0';
    private fight = 'http://www.omdbapi.com/?i=tt0137523&apikey=97021fa0';
    private rock = 'http://www.omdbapi.com/?i=tt1727824&apikey=97021fa0';

    constructor(
        private http: HttpClient) {
    }

    /** GET movies from the server */
    getMovies(): Observable<{}> {
        return this.http.get<{}>(this.gardian)
            .pipe(tap(movies => console.log(movies)));
    }

    getStar(): Observable<{}> {
        return this.http.get<{}>(this.star)
            .pipe(tap(movies => console.log(movies)));
    }
    getBat(): Observable<{}> {
        return this.http.get<appmovie>(this.bat)
            .pipe(tap(movies => console.log(movies)));
    }
    getFight(): Observable<appmovie> {
        return this.http.get<appmovie>(this.fight)
            .pipe(tap(movies => console.log(movies)));
    }
    getRock(): Observable<appmovie> {
        return this.http.get<appmovie>(this.rock)
            .pipe(tap(movies => console.log(movies)));
    }


}
