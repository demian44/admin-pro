import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnDestroy {

  private subscription: Subscription;

  constructor() {

    this.subscription = this.getObservable()
      .subscribe(
        // primer metodo que recibe, se ejecutará cuando se llame a next()
        (number: number/*1*/) => { console.log("Next: ", number) }, // EN el obserbable utilizo Map para que reciba un numero ya que dentro del codigo maneja un objeto
        // segundo""""""""""""""""""""""""""""""""""""""""""""""""" error()
        (error: string/*2*/) => { console.error("Error en el observable: ", error) },
        // se ejecuta cuando se llama complete()
        () => { console.info("Completado.") }, // Complete
      );

    let counter: number = 0;
    setInterval(() => {
      counter++;
      if (counter === 3) {
        console.log("Llego a 3");

      }
    },
      1000);
  }

  ngOnDestroy() {
    console.log("[Rxjs] - Unsusbscribe....");
    this.subscription.unsubscribe();
  }

  getObservable = (): Observable<any> => {
    return new Observable<any>((observer: Subscriber<any>) => {
      let counter: number = 0;
      console.log("Entro al observable");
      let interval = setInterval((): void => {
        const element = { value: counter };
        observer.next(element); // Con Map voy a obteneer el calue dentro de este objeto *1
        if (counter === 8) {
          clearInterval(interval);
          observer.complete();
        }

        counter++;
      }, 1000);

    }).pipe(
      map(x => x.value), //*1
      filter((value, index) => {
        return value % 2 == 0;
      }));
  }
}
