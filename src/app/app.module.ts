import { NgModule } from '@angular/core';
import { BrowserModule,provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes:Routes=[
  {
    path:'home',component:HomeComponent
},
{
  path:'about',component:AboutComponent
},
{
  path:'profiles',component:ProfilesComponent
},
{
  path:'courses',component:CoursesComponent
},
{
  path:'registration',component:RegistrationComponent
},
{
  path:'login',component:LoginComponent 
},


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProfilesComponent,
    CoursesComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   RouterModule.forRoot(routes)

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
