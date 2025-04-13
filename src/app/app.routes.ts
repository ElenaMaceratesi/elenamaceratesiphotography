import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'chi-sono', component: AboutComponent },
    { path: 'servizi', component: ServicesComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contatti', component: ContactComponent },
    { path: '**', redirectTo: '' }
  ];
