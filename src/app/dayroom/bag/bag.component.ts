import { Component, OnInit } from '@angular/core';
import { DayroomServiceService } from '../../dayroom/dayroom-service.service';
export interface Good {
  value: number;
  viewValue: number;
}
@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.less']
})

export class BagComponent implements OnInit {
  counts: Good[] = [
    { value: 1, viewValue: 1 },
    { value: 2, viewValue: 2 },
    { value: 3, viewValue: 3 },
    { value: 4, viewValue: 4 },
  ]
  bagList = []
  totalPrice: number = 0
  constructor(private dayroomService: DayroomServiceService) { }

  ngOnInit() {
    this.getBag()
  }

  getBag() {
    this.dayroomService.getBag().subscribe(bagList => {
      this.bagList = bagList
      bagList.forEach((item) => {
        this.totalPrice += item.price * item.orders
      })
    })
  }

}
