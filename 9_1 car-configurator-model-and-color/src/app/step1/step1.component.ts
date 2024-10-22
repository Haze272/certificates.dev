import {Component, computed, inject, model} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfiguratorService} from "../configurator.service";
import {CarModel, Color} from "../models.type";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    JsonPipe
  ],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component {
  configuratorService = inject(ConfiguratorService);
}
