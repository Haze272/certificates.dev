import {Injectable} from '@angular/core';
import {Movie} from "../model/movie.model";


@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favoriteMovies: Set<string> = new Set<string>();

  addToFavorites(id: string) {
    this.favoriteMovies.add(id);
  }

  removeFromFavorites(id: string) {
    this.favoriteMovies.delete(id);
  }
}
