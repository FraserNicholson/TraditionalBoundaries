import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './features/shared/nav-bar/nav-bar.component';
import { CarouselComponent } from './features/shared/carousel/carousel.component';
import { EmailFormComponent } from './features/email-form/email-form.component';
import { HomeComponent } from './features/home/home.component';
import { FooterComponent } from './features/shared/footer/footer.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { FigureComponent } from './features/shared/figure/figure.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    EmailFormComponent,
    HomeComponent,
    FooterComponent,
    GalleryComponent,
    FigureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
