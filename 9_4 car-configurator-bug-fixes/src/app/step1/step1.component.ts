import {Component, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ConfiguratorService} from '../configurator.service';

@Component({
  selector: 'app-step1',
  standalone: true,
    imports: [
        ReactiveFormsModule
    ],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component {
  service = inject(ConfiguratorService);

  changeCar(model: string) {
    this.service.selectModel(model);
    this.service.currentTowHitchIsSelected.set(false);
    this.service.currentConfig.set(undefined);
  }
}
