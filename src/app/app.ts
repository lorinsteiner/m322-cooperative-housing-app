import { Component } from '@angular/core';
import {Start} from './start/start';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    Start,
    RouterOutlet
  ],
  styleUrls: ['./app.css']
})
export class App {
  title = 'Willkommen zurück!';

}
