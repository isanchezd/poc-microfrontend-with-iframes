import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent {

  public iframeSrc: string = ''

  constructor() {
    this.iframeSrc = environment.SMART_A_URL;
  }

}
