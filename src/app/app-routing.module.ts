import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent }  from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { PublicAuthGuard } from './_guards/public.auth.guard';
import { CheckboxComponent } from './checkbox/checkbox.component';

// const routes: Routes = [];

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [PublicAuthGuard] },
  { path: 'checkbox', component: CheckboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
