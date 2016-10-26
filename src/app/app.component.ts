import { Component } from '@angular/core';
import { Race } from './race';
import { RaceService } from './race.service';
// import {ToXml} from 'xml2json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RaceService]
})
export class AppComponent {
  title = 'app works!';
  heading = "Ultra Racing Schedule";
  cash = 10000;
  races: Race[];

  constructor(private raceService: RaceService) {
  }

  ngOnInit() {
    this.raceService.getRaces()
      // .subscribe(data => this.races = data);
      .subscribe(data => {

      })
  }

  totalCost() {
    let sum = 0;
    if (this.races) {
      for (let race of this.races) {
        if (race.isRacing) sum += race.entryFee;
      }
    }
    return sum;
  }

  castDate(date) {
    return new Date(date);
  }

  cashLeft() {
    return this.cash - this.totalCost();
  }

  enterRace(race) {
    if (this.cashLeft() > race.entryFee) {
      race.isRacing = true;
    } else {
      alert("You don't have enough cash");
    }
  }

  cancelRace(race) {
    race.isRacing = false;
  }
}
