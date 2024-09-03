import { NgModule } from '@angular/core';
import {ListarVendasComponent} from "./listar-vendas/listar-vendas.component";
import {CriarVendaComponent} from "./criar-venda/criar-venda.component";
import {VendaRoutingModule} from "./venda.routing.module";
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

@NgModule({
  declarations: [
    ListarVendasComponent,
    CriarVendaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    VendaRoutingModule,
    MatSelect,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatOption,
    MatIcon
  ],
  exports: [
    ListarVendasComponent,
    CriarVendaComponent
  ]
})
export class VendaModule {}
