import {Component, inject} from '@angular/core';
import {HighlightDirective} from '../highlight.directive';
import {MovieItemComponent} from '../movie-item/movie-item.component';
import {Movie} from '../model/movie.model';
import {MoviesService} from '../services/movies.service';
import {FavoritesService} from '../services/favorites.service';
import {Observable} from 'rxjs';
import {AsyncPipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        HighlightDirective,
        MovieItemComponent,
        AsyncPipe,
        FormsModule
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly moviesService = inject(MoviesService);
  protected favoritesService = inject(FavoritesService);

  protected movies$: Observable<Movie[]> = this.moviesService.getMovies();

  protected filterMovies(title: string, year: string) {
      console.log('filter');
      this.movies$ = this.moviesService.filterMovieList(title, year);
  }
}
