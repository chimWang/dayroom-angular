import { Component, OnInit } from '@angular/core';
import { DayroomServiceService } from '../dayroom-service.service'
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
export interface Good {
  value: number;
  viewValue: number;
}
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less'],
})


export class DetailComponent implements OnInit {
  counts: Good[] = [
    { value: 1, viewValue: 1 },
    { value: 2, viewValue: 2 },
    { value: 3, viewValue: 3 },
    { value: 4, viewValue: 4 },
  ]
  goodDetail = {}
  constructor(
    private route: ActivatedRoute,
    private dayroomService: DayroomServiceService,
    private message: NzMessageService
  ) {

  }

  ngOnInit() {
    this.getGood()

  }

  getGood() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dayroomService.getGoodDetail(id).subscribe(goodDetail => this.goodDetail = goodDetail[0])
  }

  intoBag(goods, selected: number) {
    goods.orders = selected;
    this.dayroomService.intoBag(goods).subscribe(() => {
      this.message.create('success', '已添加至购物车')
    }
    )
  }

}
