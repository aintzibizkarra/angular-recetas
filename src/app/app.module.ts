import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';

//Nuestro Modulo para Routing
import { AppRouter } from './app.route';

//Services
import { CochesService } from './providers/coches.service';
import { RecetasService } from './providers/recetas.service';
import { TodosService } from './providers/todos.service';
import { CasaService } from './providers/casa.service';

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
import { RecetarioComponent } from './recetario/recetario.component';
import { DetalleComponent } from './recetario/detalle/detalle.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { FormularioBasicoComponent } from './formulario-basico/formulario-basico.component';
import { FormularioComponent } from './recetario/formulario/formulario.component';
import { FormComponent } from './concesionario/form/form.component';
import { TodosComponent } from './todos/todos.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { CasaComponent } from './inmobiliaria/casa/casa.component';


//Pipes
import {RoundPipe} from './pipe/round';
import {FilterPipe} from './pipe/filter.pipe';
import { FilterRecetas } from './pipe/filter.pipe.receta';
import { FilterCasas } from './pipe/filter.pipe.casas';







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
    RecetarioComponent,
    DetalleComponent,
    FormularioComponent,
    FormComponent,
    PlantillaComponent,
    TodosComponent,
    FormularioBasicoComponent,
    InmobiliariaComponent,
    CasaComponent,
    
    RoundPipe,
    FilterPipe,
    FilterRecetas,
    FilterCasas
   
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    CochesService,
    RecetasService,
    TodosService,
    CasaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }