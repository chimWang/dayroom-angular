import { Component, OnInit } from '@angular/core';
import { DayroomServiceService } from '../dayroom/dayroom-service.service';
import { DetailComponent } from '../dayroom/detail/detail.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  title = 'DAYROOM';
  visible = false;
  constructor(private dayroomService: DayroomServiceService) {

  }

  ngOnInit() {

    // this.getBag()

  }

  getBag() {
    this.dayroomService.getBag().subscribe(bagList => {

    })
  }

}
