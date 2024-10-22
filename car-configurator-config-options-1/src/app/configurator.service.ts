import {computed, effect, inject, Injectable, signal, Signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';
import {CarModel, CarOptions, Color, Config} from './models.type';

@Injectable({
    providedIn: 'root'
})
export class ConfiguratorService {

    private http = inject(HttpClient);
    readonly allModels: Signal<CarModel[]> = toSignal(
        this.http.get<CarModel[]>("models"), {initialValue: []}
    );

    readonly selectableColors = computed(() => this.currentCar()?.colors);

    readonly currentColor = signal<Color | undefined>(undefined);
    readonly currentCar = signal<CarModel | undefined>(undefined);
    readonly currentImage = computed(
        () => {
            const car = this.currentCar();
            const color = this.currentColor();
            if (car && color)
                return `https://interstate21.com/tesla-app/images/${car.code}/${color.code}.jpg`
            else return null;
        }
    );

    readonly step2Ready = computed(() => (this.currentCar() != undefined) && (this.currentColor() != undefined));

    readonly currentCarOptions: Signal<CarOptions | null> = signal(null);

    readonly currentCarConfig = signal<Config | undefined>(undefined);

    constructor() {
      effect(() => {
        if (this.currentCar()?.code) {
          this.http.get<CarOptions>(`options/${this.currentCar()?.code}`)
              .subscribe(options => this.currentCarOptions.set())
        }
      });
    }

    selectModel(code: CarModel["code"]) {
        const model = this.allModels().find(model => model.code === code);
        this.currentCar.set(model);
        this.currentColor.set(model?.colors[0]);
    }

    selectColor(code: Color["code"]) {
        const color = this.selectableColors()?.find(color => color.code === code);
        this.currentColor.set(color);
    }

    selectCarOption(carConfigId: Config['id']) {
        console.log('selectCarOption')
        const carConfig = this.currentCarOptions()?.configs.find(carConfig => {
            return carConfig.id === carConfigId;
        });
        console.log('carConfig:', carConfig)
        this.currentCarConfig.set(carConfig);
    }
}
