import {Component, inject, Signal} from '@angular/core';
import {MovieItemComponent} from './movie-item/movie-item.component';
import {Movie} from './model/movie.model';
import {MoviesService} from './services/movies.service';
import {HighlightDirective} from './highlight.directive';
import {FavoritesService} from "./services/favorites.service";

@Component({
  selector: 'app-root',
  standalone: true,

  templateUrl: 'app.component.html',
  imports: [
    MovieItemComponent, HighlightDirective
  ]
})
export class AppComponent {
  private readonly favoritesService = inject(FavoritesService);

  protected movies: Signal<Movie[]> = inject(MoviesService).getMovies();

  isFavorite(id: string) {
    return this.favoritesService.favoriteMovies.has(id);
  }

  toggleFavorite(id: string) {
    if (this.isFavorite(id)) {
      this.favoritesService.removeFromFavorites(id);
    } else {
      this.favoritesService.addToFavorites(id);
    }
  }
}
