import { Component } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent {
  private _promise: Promise<boolean>;
  constructor(private router: Router) {
    console.log('this.router.events');
    let observable = this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((activationEnd: ActivationEnd) => activationEnd.snapshot.data.title != undefined),
        map((activationEnd: ActivationEnd) => activationEnd.snapshot.data.title),
      );

    observable.subscribe((x: string) => console.log(x));

    this.runPromise();
  }

  /**
   * Execute the promise and
   */
  private runPromise = (): void => {
    this._promise = this.generatePromise();
    this._promise
      .then(this.executeIfSucces)
      .catch(this.executeIfFails)
      .finally(this.executeWhenFinally);
  }

  /**
   * Generate and returns a boolean promise
   * @returns retorns a Promise
   */
  private generatePromise(): Promise<boolean> {
    return new Promise<boolean>(this.runPromiseLogic);
  }

  /**
   * Defino en que escenarios se ejecuta la funcion resolve y regect
   * @param resolve
   * @param regect
   */
  private runPromiseLogic = (resolve: (arg: boolean) => void, reject: (arg: boolean) => void): void => {
    let counter: number = 0;
    let interval: any = setInterval(() => {
      counter++;
      if (counter === 3) {
        resolve(true);
      }
      else if (counter === 4) {
        reject(false);
        clearInterval(interval);
      }
    },
      1000);
  }

  private executeIfSucces = (param: boolean): void => {
    console.info(`Se ejecutó la promesa correctamente ${param}`)
  }

  private executeIfFails = (error: boolean): void => {
    console.error(`Todo mal viejo ${error}`)
  }

  private executeWhenFinally = (): void => {
    console.log("Se termino")
  }
}
