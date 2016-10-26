import { Component } from '@angular/core';
import { Menu } from './menu';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MenuService]
})
export class AppComponent {
  title = 'http://www.w3schools.com/xml/simple.xml';
  menu: Menu[];

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.menuService.getMenu()
      .subscribe(data => this.menu = data)
  }

  // totalCost() {
  //   let sum = 0;
  //   if (this.races) {
  //     for (let race of this.races) {
  //       if (race.isRacing) sum += race.entryFee;
  //     }
  //   }
  //   return sum;
  // }
  //
  // castDate(date) {
  //   return new Date(date);
  // }
  //
  // cashLeft() {
  //   return this.cash - this.totalCost();
  // }
  //
  // enterRace(race) {
  //   if (this.cashLeft() > race.entryFee) {
  //     race.isRacing = true;
  //   } else {
  //     alert("You don't have enough cash");
  //   }
  // }
  //
  // cancelRace(race) {
  //   race.isRacing = false;
  // }
}
