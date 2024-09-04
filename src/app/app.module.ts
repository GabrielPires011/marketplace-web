import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {ToastrModule} from "ngx-toastr";
import {AppRoutingModule} from "./app.routes";
import {VendaModule} from "./venda/venda.module";
import {Interceptor} from "./configuracao/interceptor";
import {AutenticacaoModule} from "./autenticacao/autenticacao.module";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {registerLocaleData} from "@angular/common";
import localePt from '@angular/common/locales/pt';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {LogModule} from "./log/log.module";

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AutenticacaoModule,
    VendaModule,
    LogModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    provideAnimationsAsync(),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
