import { Component, Input, OnInit } from '@angular/core';
import { galleryImages } from '../shared/data/galleryImages';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent {
  images = galleryImages;

  constructor() { }

}
