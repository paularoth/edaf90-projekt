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
<<<<<<< HEAD
  movies;
  id1;
  id2;
=======
  movie1;
>>>>>>> b79b657285fcaeb1b8c889694d0343616fcb2826
  movie2;
  id3;
  movie3;
  movie4;
  movie5;


  constructor(private movieService: movieService, private route: ActivatedRoute) { }

  ngOnInit() {
<<<<<<< HEAD
    //this.getMovies();
    this.getFight();
    this.getBat();
    this.getRock();
    this.getStar();
=======
    this.getMovie1();
    this.getMovie2();
    this.getMovie3();
    this.getMovie4();
    this.getMovie5();
>>>>>>> b79b657285fcaeb1b8c889694d0343616fcb2826

  }


<<<<<<< HEAD
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
=======
  getMovie1(): void {
    this.movieService.getMovie1()
      .subscribe(movie => this.movie1 = movie.Poster);
  }

  getMovie2(): void {
    this.movieService.getMovie2()
      .subscribe(movie => this.movie2 = movie.Poster);
  }
  getMovie3(): void {
    this.movieService.getMovie3()
      .subscribe(movie => this.movie3 = movie.Poster);
>>>>>>> b79b657285fcaeb1b8c889694d0343616fcb2826
  }
  getMovie4(): void {
    this.movieService.getMovie4()
      .subscribe(movie => this.movie4 = movie.Poster);
  }
  getMovie5(): void {
    this.movieService.getMovie5()
      .subscribe(movie => this.movie5 = movie.Poster);
  }



}
