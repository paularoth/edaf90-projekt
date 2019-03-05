import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appmovie } from './appmovie';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { getListeners } from '@angular/core/src/render3/discovery_utils';


@Injectable()
export class movieService {
    private guardian = 'http://www.omdbapi.com/?i=tt3896198&apikey=97021fa0';
    private star = 'http://www.omdbapi.com/?i=tt1517451&apikey=97021fa0';
    private bat = 'http://www.omdbapi.com/?i=tt0468569&apikey=97021fa0';
    private fight = 'http://www.omdbapi.com/?i=tt0137523&apikey=97021fa0';
    private rock = 'http://www.omdbapi.com/?i=tt1727824&apikey=97021fa0';
    getList = ['tt1727824', 'tt1517451', 'tt0468569', 'tt0137523', 'tt1727824'];

    constructor(
        private http: HttpClient) {
    }

    getMovieList(): Array<String>{
        return this.getList;
    }
    /** GET movies from the server */
    getMovies(movieToGet): Observable<appmovie> {
        
        /*listOfMovies.forEach(imdbID => {
            return this.http.get<appmovie>(fullURL(imdbID))
            .pipe(tap(movies=>movies));
        }); */
        return this.http.get<appmovie>(fullURL(movieToGet))
        .pipe(tap(movies => movies));
        
        function fullURL(imdbid) {
            return 'http://www.omdbapi.com/?apikey=97021fa0&i=' + imdbid;
        }
    }

    getMovie1(): Observable<appmovie> {
        return this.http.get<appmovie>(this.guardian)
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
