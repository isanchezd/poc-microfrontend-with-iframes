import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './user-view/user-view.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [UserViewComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
