import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  homeOptions = [{
    startIcon: 'fast-food-outline',
    option: 'Buy Food Voucher',
    endIcon: 'arrow-forward-outline'
  }, {
    startIcon: 'card-outline',
    option: 'Buy Airtime',
    endIcon: 'arrow-forward-outline'
  }, {
    startIcon: 'flash-outline',
    option: 'Buy Power:',
    endIcon: 'arrow-forward-outline',
    daysLeft: '6'
  }, {
    startIcon: 'pulse-outline',
    option: 'Book Clinic',
    endIcon: 'arrow-forward-outline'
  }, {
    startIcon: 'newspaper-outline',
    option: 'Transaction History',
    endIcon: 'arrow-forward-outline'
  }, {
    startIcon: 'alert-circle-outline',
    option: 'Report a Problem',
    endIcon: 'arrow-forward-outline'
  }];

  constructor() {}

}
