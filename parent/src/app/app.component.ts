import { Component, HostListener } from '@angular/core';
import { NgbToastOptions } from '@ng-bootstrap/ng-bootstrap/toast/toast-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @HostListener('window:message', ['$event'])
  onMessage(event: any): void {
    switch(event.data.action) {
      case 'DELETED_USER':
        console.log(`${event.data.action}: ${JSON.stringify(event.data.user)}`);
    }
  }

}
