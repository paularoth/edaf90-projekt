import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieComponent } from './movie/movie.component';
import { SearchComponent } from './search/search.component';
import { HistoryComponent } from './history/history.component';
import { movieService } from './appmovie.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatListModule } from '@angular/material';




@NgModule({

  declarations: [
    AppComponent,
    ViewComponent,
    HomepageComponent,
    MovieComponent,
    SearchComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,



  ],
  providers: [movieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
