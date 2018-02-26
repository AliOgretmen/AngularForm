import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { PersonDetailComponent } from '../person-detail/person-detail.component';
import { EditpersonComponent } from '../editperson/editperson.component';


export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent,
    children: [
      { path:"details/:persnr", component: PersonDetailComponent},
      { path:"edit/:persnr", component: EditpersonComponent},
      { path:"add", component: EditpersonComponent}
    ]  
},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];