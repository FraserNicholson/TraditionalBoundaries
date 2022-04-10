import { Component, Input, OnInit } from '@angular/core';
import { image } from '../interfaces/image';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss']
})
export class FigureComponent {
  @Input() image!: image;
  @Input() imagesArray!: image[][];

  constructor() { }
  modalTitle: string = '';
  modalImages!: image[];

  newSelectImage(image: image) {
    let index = -1;
    for (let i = 0; i < this.imagesArray.length; i++) {
      for (let j = 0; j < this.imagesArray[i].length; j++) {
        if (this.imagesArray[i][j] == image) {
          index = i;
        }
      }
    }

    this.modalImages = this.imagesArray[index]
    if (image.title) {
      this.modalTitle = image.title;
    }
  }

  clearModal() {
    this.modalTitle = '';
    this.modalImages = [];
  }

}
