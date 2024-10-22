import {Component, computed, inject} from '@angular/core';
import {Step1Component} from './step1/step1.component';
import {ConfiguratorService} from './configurator.service';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Step1Component, RouterLink, RouterOutlet],
  templateUrl: "app.component.html",
})
export class AppComponent {
  service = inject(ConfiguratorService);

  isStep2Blocked = computed(() => {
    return !this.service.currentCar() || !this.service.currentColor()
  })
}
