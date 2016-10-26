import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Menu } from './menu';
import 'rxjs/add/operator/map';
import * as xml2js  from 'xml2js';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MenuService {

  constructor(private http: Http) {
  }

  getMenu() {
    let parser = new xml2js.Parser({explicitArray: false});

    return new Observable(observer => {
      this.http.get('assets/simple.xml').subscribe(response => {

        parser.parseString(response.text(), (err, result) => {
          // console.log(typeof  result.breakfast_menu.food);

          // var menu = result.breakfast_menu.food;

          observer.next(result.breakfast_menu.food);
          // observer.next(result);
        });
      });
    })
    .map(data => <Menu[]>data);

    //http://www.w3schools.com/xml/simple.xml
  }
}
