import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {
  readonly title: string;
  readonly mainDetails: string;
  readonly agree: string;
  readonly terms: string;
  readonly signUp: string;
  readonly already: string;
  readonly ginIn: string;
  
  constructor() {
    this.title = 'Registro';
    this.mainDetails = 'Cree su cuenta y disfrute';
    this.agree = 'Acepto los términos';
    this.terms = ' Términos';
    this.signUp= 'Registrarse',
    this.already= '¿Ya tenés una cuenta?',
    this.ginIn= 'Iniciar sesión',
    console.log(`Constructor ${this.title}`);
  }

  ngOnInit() {
    console.log(`Init ${this.title}`);
  }

}
