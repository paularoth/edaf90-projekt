import { Component, OnInit } from '@angular/core';
import { movieService } from '../appmovie.service';
import { appmovie } from '../appmovie';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  movies;
  id1;
  id2;
  movie2;
  id3;
  movie3;
  movie4;
  movie5;


  constructor(private movieService: movieService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.getMovies();
    this.getFight();
    this.getBat();
    this.getRock();
    this.getStar();

  }


  /* getMovies(): void {
     this.movieService.getMovies()
       .subscribe(movie => this.movies = movie.Poster);
 
   }*/

  getFight(): void {
    this.movieService.getFight()
      .subscribe(movie => {
        this.movie2 = movie.Poster
        this.id1 = movie.imdbID
      });
  }
  getBat(): void {
    this.movieService.getBat()
      .subscribe(movie => {
        this.movie3 = movie.Poster,
          this.id3 = movie.imdbID
      });
  }
  getRock(): void {
    this.movieService.getRock()
      .subscribe(movie => this.movie4 = movie.Poster);
  }
  getStar(): void {
    this.movieService.getStar()
      .subscribe(movie => this.movie5 = movie.Poster);
  }



}
