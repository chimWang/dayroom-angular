import { Component, OnInit } from '@angular/core';
import { DayroomServiceService } from '../dayroom-service.service'

@Component({
  selector: 'app-dayroom',
  templateUrl: './dayroom.component.html',
  styleUrls: ['./dayroom.component.less']
})
export class DayroomComponent implements OnInit {
  menus = []
  goods=[]
  constructor(
    private dayroomService: DayroomServiceService
  ) { }

  ngOnInit() {
    this.getMenu()
    this.getGoods()
  }

  getMenu() {
    this.dayroomService.getMenu().subscribe(menus => this.menus = menus)
  }

  getGoods(){
    this.dayroomService.getGoods().subscribe(goods => this.goods = goods)
  }

  chooseType(type:string){
    this.dayroomService.getGoodsByType(type).subscribe(goods => this.goods = goods)
  }
  

}
