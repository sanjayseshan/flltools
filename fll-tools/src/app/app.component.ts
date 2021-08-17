import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // constructor() {}
  constructor(private route: Router) { }

  nextpage(page) {
    // this.route.navigateByUrl(page, {skipLocationChange: true}).then(() => {
    //   this.route.navigate([page]);
    //   });
    this.route.navigate([page]);
  }
}
