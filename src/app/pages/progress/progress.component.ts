import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  percentage: number;
  progress: number;
  progress2: number;

  constructor() {
    this.percentage = 50;
    this.progress = 60;
    this.progress2 = 50;
  }

  aumentar() {
    this.progress++;
  }

  ChangeValue(evente: number) {
    console.log(`Event: ${evente}`);
  }

  ngOnInit() {
  }
}
