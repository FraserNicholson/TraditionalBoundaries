import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailFormComponent } from './features/email-form/email-form.component';
import { HomeComponent } from './features/home/home.component';
import { GalleryComponent } from './features/gallery/gallery.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent },
  {path: 'contact', component: EmailFormComponent },
  {path: 'gallery', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
