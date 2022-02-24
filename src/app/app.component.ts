import { Component, VERSION } from '@angular/core';
import { interval } from 'rxjs';
//import { interval } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  user = { firstName: 'Nam', lastName: 'Pham' };
}
