import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserViewComponent } from "./user-view/user-view.component";

const routes = [
  {
    path: '',
    component: UserViewComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
