import { Injectable, Inject } from '@angular/core';
import { IAjustes } from '../interfaces/iajustes';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: IAjustes = {
    theme: 'default',
    urlTheme: `assets/css/colors/default.css`
  }

  constructor(@Inject(DOCUMENT) private _document) {
    this.loadSettings();
  }

  saveSettings() {
    localStorage.setItem("admin-pro-settings", JSON.stringify(this.settings));
  }

  loadSettings() {
    let settings: any = JSON.parse(localStorage.getItem("admin-pro-settings"));
    settings = null;
    try {
      if (settings as IAjustes) {
        this.settings = settings;
      }
      else {
        throw new Error("Nada puede malir sal. :v");
      }
    }
    catch (error) {
      console.log("error");
      console.log(JSON.stringify(error.toString()));
      console.log("error");
    }
  }

  applicateTheme(theme: any) {
    let url: string = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url)
    this.settings = {
      theme: theme,
      urlTheme: url
    };

    this.saveSettings();
  }

  changeStyle(link: any) {
    console.log(link);
    let items = this._document.getElementsByClassName('selector');
    for (let ref of items) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  setCheck() {
    let theme: string = this.settings.theme;
    let items: any = this._document.getElementsByClassName('selector');

    for (let ref of items) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }
  }
}