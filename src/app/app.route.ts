import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Nuestros componentes (importamos)
import {RecetaComponent} from './receta/receta.component';
import {PropiedadesComponent} from './propiedades/propiedades.component';
import {Page404Component} from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { RecetarioComponent } from './recetario/recetario.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { TodosComponent } from './todos/todos.component';
import { FormularioBasicoComponent } from './formulario-basico/formulario-basico.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';

const appRoutes: Routes = [
    {path:'', component:HomeComponent},
    //{path: 'home', component:HomeComponent},
    { path: 'receta',       component: RecetaComponent },
    { path: 'propiedades',  component: PropiedadesComponent },
    { path: 'usuario',      component: UsuarioComponent },
    { path: 'concesionario',      component: ConcesionarioComponent },
    { path: 'recetario',      component: RecetarioComponent },
    { path: 'plantilla',      component: PlantillaComponent },
    { path: 'todos',      component: TodosComponent },
    { path: 'formulario-basico',      component: FormularioBasicoComponent },
    { path: 'inmobiliaria',      component: InmobiliariaComponent },
    { path: '**',           component: Page404Component }
  ];

 
  export  const AppRouter = RouterModule.forRoot(appRoutes);