import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styleUrls: ['./breadcrums.component.css']
})
export class BreadcrumsComponent implements OnInit {

  title: string;

  constructor(
    private router: Router,
    private title2: Title,
    private meta: Meta
  ) {

    // try {
    alert("Hola");
    console.log("Muestro events:");
    console.log(this.router);
    if (this.router != undefined) {
      console.log(this.router.events);
    }
    else{
      console.log("No hay events....");
    }
    // }
    // catch{

    // }

    this.getDataRoute().subscribe(data => {
      this.title2.setTitle(data);
      this.title = data;

      const metaTag: MetaDefinition = {
        name: 'Description',
        content: this.title
      };

      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit(): void {
  }

  getDataRoute(): Observable<string> {
    return this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data.title)
      );
  }

}
