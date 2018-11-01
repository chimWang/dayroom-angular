import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DayroomComponent } from './dayroom/homePage/dayroom.component'

import { MatButtonModule, MatListModule,MatInputModule,MatBadgeModule,MatSelectModule} from '@angular/material';
import { DetailComponent } from './dayroom/detail/detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
    NgZorroAntdModule,
    BrowserAnimationsModule,
    [MatButtonModule, MatListModule,MatInputModule,MatBadgeModule,MatSelectModule]
  ],
  declarations: [
    AppComponent,
    DayroomComponent,
    DetailComponent,
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class AppModule { }