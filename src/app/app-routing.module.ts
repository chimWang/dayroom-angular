import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayroomComponent } from './dayroom/dayroom.component'

const routes: Routes = [
  { path: '', redirectTo: '/dayroom', pathMatch: 'full' },
  { path: 'dayroom', component: DayroomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
