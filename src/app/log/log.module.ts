import { NgModule } from '@angular/core';
import {ListarLogsCieloComponent} from "./listar-logs-cielo/listar-logs-cielo.component";
import {LogRoutingModule} from "./log.routing.module";
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from "@angular/material/stepper";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatMenuModule} from "@angular/material/menu";
import {MatIcon} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {VisualizarLogCieloComponent} from "./visualizar-log-cielo/visualizar-log-cielo.component";

@NgModule({
  declarations: [
    ListarLogsCieloComponent,
    VisualizarLogCieloComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    LogRoutingModule,
    MatSelect,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatOption,
    MatIcon
  ],
  exports: [
    ListarLogsCieloComponent,
    VisualizarLogCieloComponent
  ]
})
export class LogModule {}
