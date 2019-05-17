import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  percentage: number;
  progress: number;
  constructor() {
    this.percentage = 50;
    this.progress = 60;
  }

  ngOnInit() {
  }

  incrementValue(value: number) {
    console.log('Entro');
    if ((this.progress < 100 && value > 0) || (this.progress > 0 && value < 0))
      this.progress += value;
  }

}
