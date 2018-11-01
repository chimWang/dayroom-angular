import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayroomComponent } from './dayroom/dayroom.component'
import {DetailComponent} from './detail/detail.component'

const routes: Routes = [
  { path: '', redirectTo: '/dayroom', pathMatch: 'full' },
  { path: 'dayroom', component: DayroomComponent },
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
