import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HistoricoComponent } from './historico/historico.component';
import { HabilidadeComponent } from './habilidade/habilidade.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'experiencias', component: ExperienciaComponent },
  { path: 'historico', component: HistoricoComponent },
  { path: 'habilidades', component: HabilidadeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
