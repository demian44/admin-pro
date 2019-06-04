import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from 'src/app/services/settings/settings.service';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _settings: SettingsService) {
    
  }

  ngOnInit() {
    this._settings.setCheck();
  }

  changeColor(theme: string, link: any): void {
    this.changeStyle(link);
    this._settings.applicateTheme(theme)
  }

  changeStyle(link: any) {
    this._settings.changeStyle(link);
  }

  
}
