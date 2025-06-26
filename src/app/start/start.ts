import { Component } from '@angular/core';
import {Page} from '../../components/page/page';
import {Infobox} from '../../components/infobox/infobox';
import {HlmButtonDirective} from '@spartan-ng/helm/button';

@Component({
  selector: 'start-page',
  imports: [
    Page,
    Infobox,
    HlmButtonDirective
  ],
  templateUrl: './start.html',
  styleUrl: './start.css'
})
export class Start {

}
