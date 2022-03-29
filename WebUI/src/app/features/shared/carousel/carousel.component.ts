import { Component, Input, OnInit } from '@angular/core';
import { image } from '../interfaces/image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent{
  @Input() images!: image[];

  constructor() { }
}
