import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ConfiguratorService} from './configurator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: "app.component.html",
})
export class AppComponent {
  service = inject(ConfiguratorService);
}
