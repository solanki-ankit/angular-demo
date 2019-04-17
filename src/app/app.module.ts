import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { PublicAuthGuard } from './_guards/public.auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    PublicAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
