import { Component, OnInit } from '@angular/core';
import { movieService } from '../appmovie.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  movie1;
  id1;
  id2;
  movie2;
  id3;
  movie3;
  movie4;
  id4;
  movie5;
  id5;
  constructor(private movieService: movieService,
    private route: ActivatedRoute,
    private messageService: MessageService) { }

  ngOnInit() {

    this.getMovie1();
    this.getMovie2();
    this.getMovie3();
    this.getMovie4();
    this.getMovie5();

  }

  onRent(id) {
    this.messageService.add(id);
  }



  getMovie1(): void {
    this.movieService.getMovie1()
      .subscribe(movie => {
        this.movie1 = movie.Poster
        this.id1 = movie.imdbID
      });
  }
  getMovie2(): void {
    this.movieService.getMovie2()
      .subscribe(movie => {
        this.movie2 = movie.Poster,
          this.id2 = movie.imdbID
      });
  }
  getMovie3(): void {
    this.movieService.getMovie3()
      .subscribe(movie => {
        this.movie3 = movie.Poster,
          this.id3 = movie.imdbID
      });
  }
  getMovie4(): void {
    this.movieService.getMovie4()
      .subscribe(movie => {
        this.movie4 = movie.Poster
        this.id4 = movie.imdbID
      });
  }

  getMovie5(): void {
    this.movieService.getMovie5()
      .subscribe(movie => {
        this.movie5 = movie.Poster
        this.id5 = movie.imdbID
      });
  }

}
