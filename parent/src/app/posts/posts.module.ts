import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsViewComponent } from './posts-view/posts-view.component';
import { PostsRoutingModule } from './posts-routing.module';



@NgModule({
  declarations: [PostsViewComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
