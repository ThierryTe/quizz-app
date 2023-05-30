


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes:Routes=[
  {
    path: '',
    loadChildren: ()=> import('./app/routes/candidat-route')
  },
  {
    path: 'editeur',
    loadChildren: ()=> import('./app/routes/admin-route')
  }
]
bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule), provideRouter(routes, withComponentInputBinding())],
    
})
  .catch(err => console.error(err));
