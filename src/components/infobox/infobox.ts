import {Component, Input} from '@angular/core';

@Component({
  selector: 'infobox',
  imports: [],
  templateUrl: './infobox.html',
  styleUrl: './infobox.css'
})
export class Infobox {

  @Input() title: string = 'Information Box';

  @Input() textRight: string = 'Information Box content right';
  @Input() textBottom: string = '';
  @Input() buildingLeft: string = '';

  @Input() hasFavorite: boolean = false;
  @Input() favorite: boolean = false;

  toggleFavorite() {
    this.favorite = !this.favorite;
  }
}
