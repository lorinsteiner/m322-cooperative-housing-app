import { Component } from '@angular/core';
import {MyHeader} from '../components/header/my-header.component';
import {MyFooter} from '../components/footer/my-footer';
import {Start} from './start/start';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    MyHeader,
    MyFooter,
    Start
  ],
  styleUrls: ['./app.css']
})
export class App {
  title = 'Willkommen zurück!';

}
