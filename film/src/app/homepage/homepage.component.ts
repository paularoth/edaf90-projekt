import { Component, OnInit } from '@angular/core';
import { movieService } from '../appmovie.service';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../rental.service';
import { appmovie } from '../appmovie';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  mvList = [];
  poster1;
  poster2;
  poster3;
  poster4;
  poster5;

  id1;
  id2;
  id3;
  id4;
  id5;

  title1;
  year1;
  genre1;

  title2;
  year2;
  genre2;

  title3;
  year3;
  genre3;

  title4;
  year4;
  genre4;

  title5;
  year5;
  genre5;

  constructor(private movieService: movieService,
    private route: ActivatedRoute,
    private rentalService: RentalService) { }

  ngOnInit() {
    /* let tempIdList = this.movieService.getMovieList();
     tempIdList.forEach(mvID => {
       this.movieService.getMovies(mvID).subscribe(movie => {
         this.mvList.push( new appmovie(movie.Poster, movie.imdbID,
          movie.Title, movie.Year, movie.Genre))
       })
       console.log(this.mvList);
     });*/
    this.getMovie1();
    this.getMovie2();
    this.getMovie3();
    this.getMovie4();
    this.getMovie5();
  }

  onRent(id) {
    this.rentalService.add(id);
  }

  getMovie1(): void {
    this.movieService.getMovie1()
      .subscribe(movie => {
        this.poster1 = movie.Poster
        this.id1 = movie.imdbID
        this.title1 = movie.Title
        this.year1 = movie.Year
        this.genre1 = movie.Genre

      });
  }

  getMovie2(): void {
    this.movieService.getMovie2()
      .subscribe(movie => {
        this.poster2 = movie.Poster,
          this.id2 = movie.imdbID
        this.title2 = movie.Title
        this.year2 = movie.Year
        this.genre2 = movie.Genre
      });
  }

  getMovie3(): void {
    this.movieService.getMovie3()
      .subscribe(movie => {
        this.poster3 = movie.Poster,
          this.id3 = movie.imdbID
        this.title3 = movie.Title
        this.year3 = movie.Year
        this.genre3 = movie.Genre
      });
  }

  getMovie4(): void {
    this.movieService.getMovie4()
      .subscribe(movie => {
        this.poster4 = movie.Poster
        this.id4 = movie.imdbID
        this.title4 = movie.Title
        this.year4 = movie.Year
        this.genre4 = movie.Genre
      });
  }

  getMovie5(): void {
    this.movieService.getMovie5()
      .subscribe(movie => {
        this.poster5 = movie.Poster
        this.id5 = movie.imdbID
        this.title5 = movie.Title
        this.year5 = movie.Year
        this.genre5 = movie.Genre
      });
  }

}
