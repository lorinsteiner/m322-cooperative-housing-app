import { Component } from '@angular/core';
import {Page} from '../../components/page/page';
import {Infobox} from '../../components/infobox/infobox';
import {Button} from '../../components/button/button';

@Component({
  selector: 'start-page',
  imports: [
    Page,
    Infobox,
    Button
  ],
  templateUrl: './start.html',
  styleUrl: './start.css'
})
export class Start {

}
