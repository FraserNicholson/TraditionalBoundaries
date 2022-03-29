import { Component, OnDestroy, OnInit } from '@angular/core';
import { carouselImages } from '../shared/data/carouselImages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  images = carouselImages;

  constructor() { }

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    })
  })  

  ngOnInit() {
    window.focus();
    
    const animationTarget = document.querySelector('.animation-target') as Element;
    
    this.observer.observe(animationTarget);    
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  scrollTo(id: string) {    
    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView(true);
    }    
  }
}
