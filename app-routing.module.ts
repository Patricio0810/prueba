import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultadosComponent } from './resultados/resultados.component';
import { FormularioEncuestaComponent } from './formulario-encuesta/formulario-encuesta.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'resultados', component:ResultadosComponent},
  {path: 'encuesta', component:FormularioEncuestaComponent},
  {path: '', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
