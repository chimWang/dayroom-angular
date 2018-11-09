import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayroomComponent } from './dayroom/homePage/dayroom.component'
import { DetailComponent } from './dayroom/detail/detail.component'
import { BagComponent } from './dayroom/bag/bag.component';


const routes: Routes = [
  { path: '', redirectTo: '/dayroom', pathMatch: 'full' },
  { path: 'dayroom', component: DayroomComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'bag', component: BagComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
