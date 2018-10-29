import { NgModule } from '@angular/core';
import { MatButtonModule, MatListModule,MatInputModule,MatBadgeModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatListModule,MatInputModule,MatBadgeModule],
  exports: [MatButtonModule, MatListModule,MatInputModule,MatBadgeModule],
})
export class MyOwnCustomMaterialModule { }