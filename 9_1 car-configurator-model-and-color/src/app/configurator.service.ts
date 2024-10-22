import {computed, inject, Injectable, signal, Signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';
import {CarModel, Color, SelectedConfig} from './models.type';

@Injectable({
  providedIn: 'root'
})
export class ConfiguratorService {

  private http = inject(HttpClient);
  readonly allModels: Signal<CarModel[]> = toSignal(
    this.http.get<CarModel[]>("models"), {initialValue: []}
  );

  readonly currentCar = signal<CarModel | undefined>(undefined);
  readonly currentColor = signal<Color | undefined>(undefined);

  readonly selectableColors = computed(() => this.currentCar()?.colors);
  readonly currentImage = computed(
      () => {
        const car = this.currentCar();
        const color = this.currentColor();

        if (car && color) {
          return `https://interstate21.com/tesla-app/images/${car.code}/${color.code}.jpg`
        }
        else {
          return null;
        }
      }
  );

  selectModel(code: CarModel["code"]) {
    const model = this.allModels().find(model => model.code === code);
    this.currentCar.set(model);
    this.currentColor.set(model?.colors[0]);
  }

  selectColor(code: Color["code"]) {
    const color = this.selectableColors()?.find(color => color.code === code);
    this.currentColor.set(color);
  }
}
