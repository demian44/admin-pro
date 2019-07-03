import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {
    // Creo un observable y le paso una arrow function.
    let observable = new Observable(this.observableLogic);
    // let observable = new Observable(observer => {

    //   let counter: number = 1;

    //   setInterval(() => {
    //     observer.next(`Observable: ${counter}`);
    //     if (counter === 3) {
    //       observer.complete();
    //     }

    //     if (counter === 2) {
    //       observer.error("Auxilio");
    //     }

    //     counter++;
    //   }, 1000);
    // });

    // Paso las funciones que se ejecutaran en cada escenario dentro del obsercable
    observable
    .pipe(retry(2))
    .subscribe(
      number => { console.log("Next: ", number) }, // next
      error => { console.error("Error en el observable: ", error) }, // Error
      () => { console.info("Termino.") } // Complete
    );
  }

  ngOnInit() {
  }

  /**
   *
   */
  observableLogic = (observer: Subscriber<string>) => {
    let counter: number = 1;
    let interval = setInterval(() => {
      observer.next(`Observable: ${counter}`);
      if (counter === 3) {
        observer.complete();
      }

      if (counter === 2) {
      //clearInterval(interval);
        observer.error("Auxilio");
      }

      counter++;
    }, 1000);
  }
}
