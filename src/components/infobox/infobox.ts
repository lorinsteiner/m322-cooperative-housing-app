import { Component } from '@angular/core';

@Component({
  selector: 'infobox',
  imports: [],
  templateUrl: './infobox.html',
  styleUrl: './infobox.css'
})
export class Infobox {

  title: string = 'Information Box';

  textRight: string = 'Information Box content right';
  textBottom: string = 'Information Box content bottom';
  buildingLeft: string = '-';


  hasFavorite: boolean = false;
  favorite: boolean = false;

}
