import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {

  public iframeSrc: string = '';

  constructor() {
    this.iframeSrc = environment.SMART_B_URL;
  }

}
