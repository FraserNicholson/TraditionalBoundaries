import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const firebaseConfig = {
  apiKey: "AIzaSyBaZHr8au_XKBh7_S78gTOvWLCP0XWL0KE",
  authDomain: "traditional-boundaries.firebaseapp.com",
  projectId: "traditional-boundaries",
  storageBucket: "traditional-boundaries.appspot.com",
  messagingSenderId: "146288892851",
  appId: "1:146288892851:web:42119ace8b4b085237c9c6",
  measurementId: "G-MY2YF2J2LN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);