import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path:'login',component:LoginComponent},
  // { path: 'home', component: HomeComponent ,},
  // { path: 'about/:name', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  { path: 'home', loadChildren: './home/home.module#HomeModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
