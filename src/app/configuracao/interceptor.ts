import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AutenticacaoService} from "../service/autenticacao.service";

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private autenticacaoService: AutenticacaoService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('/autenticacao')) {
      return next.handle(request);
    }

    if (this.autenticacaoService.estaLogado()) {
      request = request.clone({
        setHeaders: {
          Authorization: this.autenticacaoService.obterAuthorizationToken()
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.autenticacaoService.sair();
        }
        return throwError(error);
      })
    );
  }
}
