import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeViewComponent } from "./home-view/home-view.component";

const Routes = [
  {
    path: '',
    component: HomeViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(Routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
