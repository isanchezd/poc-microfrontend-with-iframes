import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserViewComponent } from './user-view/user-view.component';
import { UsersRoutingModule } from './users-routing.module';



@NgModule({
  declarations: [UserViewComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
