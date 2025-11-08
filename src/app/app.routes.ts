import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Privacy } from './pages/privacy/privacy';
import { Terms } from './pages/terms/terms';
import { Contact } from './pages/contact/contact';
import { ThemePreview } from './pages/theme-preview/theme-preview';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'privacy', component: Privacy },
  { path: 'terms', component: Terms },
  { path: 'contact', component: Contact },
  { path: 'theme-preview', component: ThemePreview },
  { path: '**', redirectTo: '' }
];
