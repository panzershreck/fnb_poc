import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Race } from './race';
import 'rxjs/add/operator/map';
import * as xml2js  from 'xml2js';

@Injectable()
export class RaceService {

  constructor(private http: Http) {
  }

  getRaces() {
    var headers = new Headers();
    headers.append('Accept', 'application/xml');

    // console.log(parseString);

    // var parseXml;

    // if (typeof window.DOMParser != "undefined") {
    //   parseXml = function(xmlStr) {
    //     return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");
    //   };
    // } else if (typeof window.ActiveXObject != "undefined" &&
    //   new window.ActiveXObject("Microsoft.XMLDOM")) {
    //   parseXml = function(xmlStr) {
    //     var xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
    //     xmlDoc.async = "false";
    //     xmlDoc.loadXML(xmlStr);
    //     return xmlDoc;
    //   };
    // } else {
    //   throw new Error("No XML parser found");
    // }

    return this.http.get('app/simple.xml', {headers: headers})
      .map((response: Response) => {

        xml2js.parseString(response.text(), function (err, result) {
          console.dir(result);
          console.log('Done');
        });
      });
    // return this.http.get('app/races.json')
    //       .map(response => <Race[]>response.json().racesData);

    //http://www.w3schools.com/xml/simple.xml
  }
}
