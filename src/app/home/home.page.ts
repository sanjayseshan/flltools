import { jsDocComment } from '@angular/compiler';
import { Component } from '@angular/core';
import * as bubble from '../../assets/missions';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ngOnInit() {
    // $('head').append('<script async src="assets/js/search.js"></script>');
    // document.head.innerHTML+=("<script>alert('hi')</script>")
    eval('initpage();switchLanguage();');
  }

}
