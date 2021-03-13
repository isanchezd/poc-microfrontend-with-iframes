import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';


@NgModule({
  imports: [HomeRoutingModule],
  exports: [],
  declarations: [HomeViewComponent],
  providers: [],
})
export class HomeModule { }
