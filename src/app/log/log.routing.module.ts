import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarLogsCieloComponent} from "./listar-logs-cielo/listar-logs-cielo.component";
import {VisualizarLogCieloComponent} from "./visualizar-log-cielo/visualizar-log-cielo.component";

const routes: Routes = [
  { path: 'log', component: ListarLogsCieloComponent },
  { path: 'log/visualiza', component: VisualizarLogCieloComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }
