import {Component, inject, Signal} from '@angular/core';
import {HighlightDirective} from '../highlight.directive';
import {MovieItemComponent} from '../movie-item/movie-item.component';
import {Movie} from '../model/movie.model';
import {MoviesService} from '../services/movies.service';
import {FavoritesService} from '../services/favorites.service';

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        HighlightDirective,
        MovieItemComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected movies: Signal<Movie[]> = inject(MoviesService).getMovies();
  protected favoritesService = inject(FavoritesService);
}
