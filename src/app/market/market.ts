import { Component } from '@angular/core';
import {Page} from '../../components/page/page';
import {HlmTabsComponent, HlmTabsListComponent} from '@spartan-ng/helm/tabs';

@Component({
  selector: 'app-market',
  imports: [
    Page,
    HlmTabsComponent,
    HlmTabsListComponent,
  ],
  templateUrl: './market.html',
  styleUrl: './market.css'
})
export class Market {

}
