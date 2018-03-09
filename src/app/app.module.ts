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

//Pipes
import {RoundPipe} from './pipe/round';
import {FilterPipe} from './pipe/filter.pipe';
import { FilterRecetas } from './pipe/filter.pipe.receta';
import { FormularioComponent } from './recetario/formulario/formulario.component';
import { FormComponent } from './concesionario/form/form.component';
import { TodosComponent } from './todos/todos.component';





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
    FilterRecetas,
    RecetarioComponent,
    DetalleComponent,
    FormularioComponent,
    FormComponent,
    PlantillaComponent,
    TodosComponent,
   
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
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }