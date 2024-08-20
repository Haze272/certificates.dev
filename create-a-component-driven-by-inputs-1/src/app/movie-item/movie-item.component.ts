import { Component } from '@angular/core';


@Component({
  selector: 'app-movie-item',
  template: `
    <div class="movie-item">
      <div>
        <h4>Test movie</h4>
        <small class="subtitle">
          <span>Release date: 2024-01-02</span>
        </small>
      </div>
      <button>Details</button>
    </div>
  `,
  standalone: true,
  styleUrls: [ 'movie-item.component.scss' ]
})
export class MovieItemComponent {

}

