import { Component, OnInit } from '@angular/core';
import { movieService } from '../appmovie.service';
import { appmovie } from '../appmovie';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  movie1;
  movie2;
  movie3;
  movie4;
  movie5;


  constructor(private movieService: movieService) { }

  ngOnInit() {
    this.getMovie1();
    this.getMovie2();
    this.getMovie3();
    this.getMovie4();
    this.getMovie5();

  }


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
