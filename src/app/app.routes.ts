import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
export const routes: Routes = [
    {
        path: 'home',
        component:HomeComponent,
        pathMatch:'full'
    },
    {
        path: 'about',
        component:AboutComponent
    },
    {
        path:'books',
        component: BooksComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path:'**',
        component: HomeComponent
    }
];
