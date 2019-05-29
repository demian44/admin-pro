import { Component } from '@angular/core';
import { DonutGraphic } from 'src/app/components/donut-graphic/donut-graphic';

@Component({
  selector: 'app-graphic-one',
  templateUrl: './graphic-one.component.html',
  styleUrls: ['./graphic-one.component.css']
})
export class GraficOneComponent{

  graphics: DonutGraphic[] = [
    {
      labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      data: [[24, 30, 46]],
      type: 'doughnut',
      information: 'El pan se come con'
    },
    {
      labels: ['Hombres', 'Mujeres'],
      data: [[4500, 6000]],
      type: 'doughnut',
      information: 'Entrevistados'
    },
    {
      labels: ['Si', 'No'],
      data: [[95, 5]],
      type: 'doughnut',
      information: '¿Le dan gases los frijoles?'
    },
    {
      labels: ['No', 'Si'],
      data: [[85, 15]],
      type: 'doughnut',
      information: '¿Le importa que le den gases?'
    },
  ];
}
