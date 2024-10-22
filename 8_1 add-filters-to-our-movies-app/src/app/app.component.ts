import {Component, inject, Signal} from '@angular/core';
import {MovieItemComponent} from './movie-item/movie-item.component';
import {Movie} from './model/movie.model';
import {MoviesService} from './services/movies.service';
import {HighlightDirective} from './highlight.directive';
import {FavoritesService} from './services/favorites.service';
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-root',
  standalone: true,

  templateUrl: 'app.component.html',
  imports: [
    MovieItemComponent, HighlightDirective, AsyncPipe, RouterOutlet
  ]
})
export class AppComponent {

  protected movies$: Observable<Movie[]> = inject(MoviesService).getMovies();
  protected favoritesService = inject(FavoritesService);

}
