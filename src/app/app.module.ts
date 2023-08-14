import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';

import { SearchbarComponent } from './searchbar/searchbar.component';
import { CountriesComponent } from './countries/countries.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpInterceptor ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { CountrySvc } from './classes/CountryService';
import { MyInterceptor } from './classes/MyLovelyInterceptor';
import { Route,Routes,RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddcountryComponent } from './addcountry/addcountry.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';


const routes : Routes = [
  {path:'', component : DashboardComponent},
  {path:'addcountry', component : AddcountryComponent,canActivate:[AuthGuard]},
  {path:'login',component : LoginComponent},
  {path:'**', component : NotfoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    SearchbarComponent,
    CountriesComponent,
    DashboardComponent,
    AddcountryComponent,
    NotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CountrySvc,AuthGuard,AuthService,{ provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
