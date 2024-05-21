import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideFirebaseApp(() => 
      initializeApp({
      "projectId":"ejercicioparcial-550bd",
      "appId":"1:380108064462:web:c3fa627494e1cc0becb29f",
      "storageBucket":"ejercicioparcial-550bd.appspot.com",
      "apiKey":"AIzaSyC1zQ_p6Z74ZK63pFmkIp3ZvGpU-UQ9DXs",
      "authDomain":"ejercicioparcial-550bd.firebaseapp.com",
      "messagingSenderId":"380108064462"
    })), 
    provideFirestore(() => getFirestore())
  ]
};