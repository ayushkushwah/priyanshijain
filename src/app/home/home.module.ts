import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, RoutesRecognized, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { NavComponent } from '../nav/nav.component';

const routes: Routes = [

  { path: '', component: HomeComponent,canActivate:[AuthGuard],
    children:[
    {
      path: 'about/:name', component: AboutComponent
    },
    {
      path: 'contact', component: ContactComponent
    },
  ]
},
 // { path: 'about/:name', component: AboutComponent },
  //{ path: 'contact', component: ContactComponent },
];
@NgModule({
  declarations: [
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class HomeModule { }
