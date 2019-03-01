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

    getMovies(imdbid): Observable<appmovie> {
        function fullURL(imdbid) {
            return 'http://www.omdbapi.com/?i=' + imdbid + '&apikey=97021fa0';
        }
        return this.http.get<appmovie>(fullURL(imdbid))
            .pipe(tap(movies => console.log(movies)));
    }
    getMovie1(): Observable<appmovie> {
        return this.http.get<appmovie>(this.gardian)
            .pipe(tap(movies => movies));

    }

    getMovie2(): Observable<appmovie> {
        return this.http.get<appmovie>(this.fight)
            .pipe(tap(movies => movies));
    }

    getMovie3(): Observable<appmovie> {
        return this.http.get<appmovie>(this.bat)
            .pipe(tap(movies => console.log(movies)));
    }

    getMovie4(): Observable<appmovie> {
        return this.http.get<appmovie>(this.rock)
            .pipe(tap(movies => movies));
    }
    getMovie5(): Observable<appmovie> {
        return this.http.get<appmovie>(this.star)
            .pipe(tap(movies => movies));
    }
}
