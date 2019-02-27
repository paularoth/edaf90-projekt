import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewComponent } from './view/view.component';
import { MovieComponent } from './movie/movie.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'view', component: HomepageComponent },
  { path: 'homepage', component: ViewComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'history', component: HistoryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
