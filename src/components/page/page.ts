import { Component } from '@angular/core';
import {MyFooter} from "../footer/my-footer";
import {MyHeader} from "../header/my-header";

@Component({
  selector: 'page',
    imports: [
        MyFooter,
        MyHeader
    ],
  templateUrl: './page.html',
  styleUrl: './page.css'
})
export class Page {

  title: string = "Start";

}
