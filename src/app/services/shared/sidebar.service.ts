import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public menu: any = [
    {
      title: 'Principal',
      icon: 'mdi mdi-guage',
      submenu: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'ProgressBar', url: '/progress' },
        { title: 'Graphics', url: '/graphic-one' },
        { title: 'Promises', url: '/promises' },
        { title: 'Rxjs', url: '/rxjs' },
        { title: 'ObservableExample', url: '/ovservable-example' },
      ],
    },
  ];

  constructor() { }
}
