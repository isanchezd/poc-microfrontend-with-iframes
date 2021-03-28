import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {
  public iframeUrl: SafeResourceUrl = '';

  constructor(private _sanitizer: DomSanitizer) {
    this.iframeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(environment.USERS_APP_URL);
  }

}
