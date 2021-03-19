import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {

  public iframeUrl: SafeResourceUrl = '';

  constructor(private _sanitizer: DomSanitizer) {
    this.iframeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(environment.PRODUCTS_APP_URL);
  }

}
