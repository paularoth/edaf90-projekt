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
  mvIdList = [];
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
    private rentalService: RentalService) {
      this.mvIdList = movieService.getMovieIds(); //funkar
     }

  ngOnInit() {
    /* let tempIdList = this.movieService.getMovieList();
     tempIdList.forEach(mvID => {
       this.movieService.getMovies(mvID).subscribe(movie => {
         this.mvList.push( new appmovie(movie.Poster, movie.imdbID,
          movie.Title, movie.Year, movie.Genre))
       })
       console.log(this.mvList);
     });*/
    console.log("get movies is " + this.getMovies());


  }
  

  onRent(id) {
    this.rentalService.addRental(id);
  }

  getMovies(): void {

    this.mvIdList.forEach(id => {
    this.movieService.getMovies(id)
    .subscribe(movie => {
      var a = new appmovie(movie.Poster, movie.imdbID, movie.Title, movie.Year, movie.Genre);
      //console.log(a);
      this.mvList.push(a);
    })});
    console.log(this.mvList);
  }

  /*getMovie(): void {
    this.movieService.getMovie(1)
      .subscribe(movie => {
        this.poster1 = movie.Poster
        this.id1 = movie.imdbID
        this.title1 = movie.Title
        this.year1 = movie.Year
        this.genre1 = movie.Genre
      });
    this.movieService.getMovie(2)
      .subscribe(movie => {
        this.poster2 = movie.Poster,
          this.id2 = movie.imdbID
        this.title2 = movie.Title
        this.year2 = movie.Year
        this.genre2 = movie.Genre
      });
    this.movieService.getMovie(3)
      .subscribe(movie => {
        this.poster3 = movie.Poster,
          this.id3 = movie.imdbID
        this.title3 = movie.Title
        this.year3 = movie.Year
        this.genre3 = movie.Genre
      });
    this.movieService.getMovie(4)
      .subscribe(movie => {
        this.poster4 = movie.Poster
        this.id4 = movie.imdbID
        this.title4 = movie.Title
        this.year4 = movie.Year
        this.genre4 = movie.Genre
      });
    this.movieService.getMovie(5)
      .subscribe(movie => {
        this.poster5 = movie.Poster
        this.id5 = movie.imdbID
        this.title5 = movie.Title
        this.year5 = movie.Year
        this.genre5 = movie.Genre
      });
  } */
}
