import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
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

//Pipees
import {RoundPipe} from './pipe/round';
import {FilterPipe} from './pipe/filter.pipe';
import { RecetarioComponent } from './recetario/recetario.component';
import { ListaRecetasComponent } from './recetario/lista-recetas/lista-recetas.component';
import { RecetaDetalleComponent } from './recetario/receta-detalle/receta-detalle.component';




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
    RoundPipe,
    FilterPipe,
    RecetarioComponent,
    ListaRecetasComponent,
    RecetaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule
  ],
  providers: [
    CochesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }