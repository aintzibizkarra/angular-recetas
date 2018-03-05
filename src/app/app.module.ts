import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Nuestro Modulo para Routing
import { AppRouter } from './app.route';

//Services
import { CochesService } from './providers/coches.service';

//Componentes
import { AppComponent } from './app.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { CocheComponent } from './concesionario/coche/coche.component';
import { ListadoComponent } from './concesionario/listado/listado.component';
import {RoundPipe} from './pipe/round';



@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    PropiedadesComponent,
    Page404Component,
    HomeComponent,
    UsuarioComponent,
    ConcesionarioComponent,
    CocheComponent,
    ListadoComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    AppRouter
  ],
  providers: [
    CochesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }