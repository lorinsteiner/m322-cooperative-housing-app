import {Component, Input} from '@angular/core';

@Component({
  selector: 'my-footer',
  imports: [],
  templateUrl: './my-footer.html',
  styleUrl: './my-footer.css'
})
export class MyFooter {

  @Input() currentItem: number = 0;

}
