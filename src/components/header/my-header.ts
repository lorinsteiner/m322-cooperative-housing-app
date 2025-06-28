import {Component, Input} from '@angular/core';

@Component({
  selector: 'my-header',
  imports: [],
  templateUrl: './my-header.html',
  styleUrl: './my-header.css'
})
export class MyHeader {

  @Input() title: string = 'Start';

}
