import { Component, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-observable-example',
  templateUrl: './observable-example.component.html',
  styles: []
})
export class ObservableExampleComponent implements OnDestroy {
  private _observable: Subscription;
  constructor() {
    this.getObservable()
      .pipe(retry(2))
      .subscribe(
        // primer metodo que recibe, se ejecytara cuando se llame a next()
        (number: number/*1*/) => { console.log("Next: ", number) },
        // segundo""""""""""""""""""""""""""""""""""""""""""""""""" error()
        (error: string/*2*/) => { console.error("Error en el observable: ", error) },
        // se ejecuta cuando se llama complete()
        () => { console.info("Termino.") }, // Complete
      );
  }

  ngOnDestroy() {
    this._observable.unsubscribe();
  }

  getObservable = (): Observable<number/*1*/ | string/*2*/> => {
    // Creo un observable y le paso una arrow function.
    return new Observable(observer => {
      let counter: number = 1;
      let interval = setInterval(() => {
        observer.next(`Observable: ${counter}`);

        if (counter === 6) {
          observer.complete();
        }
        else if (counter === 5) {
          clearInterval(interval);
          observer.error("Auxilio");
        }

        counter++;

      }, 1000);
    });
    // Paso las funciones que se ejecutaran en cada escenario dentro del obsercable
  }
}
