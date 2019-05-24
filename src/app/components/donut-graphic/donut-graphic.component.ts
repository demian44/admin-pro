import { Component, Input } from '@angular/core';
import { DonutGraphic } from './donut-graphic';

@Component({
  selector: 'app-donut-graphic',
  templateUrl: './donut-graphic.component.html',
  styles: []
})
export class DonutGraphicComponent{

  @Input() graphic: DonutGraphic;

}
