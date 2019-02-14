import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Route} from '@angular/router';

import {HttpClient, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import{UsuarioService} from './usuario.service';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EnviadosComponent } from './enviados/enviados.component';
import { EliminadosComponent } from './eliminados/eliminados.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FieldNamePipe } from './field-name.pipe';

const routes: Route[]=[

  {path:'home',component:HomeComponent},
  {path:'',component:LoginComponent},
  {path:'nuevo',component:NuevoComponent},
  {path:'enviados',component:EnviadosComponent},
  {path:'eliminados',component:EliminadosComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NuevoComponent,
    EnviadosComponent,
    EliminadosComponent,
    NavbarComponent,
    FieldNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
