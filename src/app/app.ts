import { Component } from '@angular/core';
import {Start} from './start/start';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    Start
  ],
  styleUrls: ['./app.css']
})
export class App {
  title = 'Willkommen zurück!';

}
