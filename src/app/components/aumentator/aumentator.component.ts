import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-aumentator',
  templateUrl: './aumentator.component.html',
  styleUrls: []
})
export class AumentatorComponent {

  @Input('numero') progress: number;

  @Input('titlas') theTitle: string;

  @ViewChild('txtProgress') inputProgress: ElementRef;

  @Output('ChangeValue') ProgressChanged: EventEmitter<number> = new EventEmitter();

  incrementValue(value: number) {
    if ((this.progress < 100 && value > 0) || (this.progress > 0 && value < 0)) {
      this.progress += value;
      this.ProgressChanged.emit(this.progress);
    }

    this.inputProgress.nativeElement.focus();
  }

  onChanges(newValue: number) {
    if (newValue > 100) {
      this.progress = 100;
    }
    else if (newValue < 0) {
      this.progress = 0;
    }
    else {
      this.progress = newValue;
    }

    this.inputProgress.nativeElement.value = this.progress;
  }
}
