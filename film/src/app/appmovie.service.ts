import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appmovie } from './appmovie';
import { Observable } from 'rxjs';


@Injectable()
export class movieService {
    private movieURL = 'http://www.omdbapi.com/?t=Titanic';

    constructor() {

    }


} 
