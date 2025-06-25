import { Component } from '@angular/core';
import {Page} from '../../components/page/page';
import {Infobox} from '../../components/infobox/infobox';

@Component({
  selector: 'start-page',
  imports: [
    Page,
    Infobox
  ],
  templateUrl: './start.html',
  styleUrl: './start.css'
})
export class Start {

}
