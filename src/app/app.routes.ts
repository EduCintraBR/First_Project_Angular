import { Routes } from '@angular/router';
import { HomeComponent } from './navigation/home/home.component';
import { AboutComponent } from './institutional/about/about.component'
import { ContactComponent } from './institutional/contact/contact.component'
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home' , component: HomeComponent },
    { path: 'about' , component: AboutComponent },
    { path: 'contact' , component: ContactComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'products', component: ListaProdutoComponent },
    { path: 'product-detail/:id', component: ListaProdutoComponent }
];