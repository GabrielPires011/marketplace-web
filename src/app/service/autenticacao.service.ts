import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";
import {environment} from "../../../environment";
import {AutenticacaoDto} from "../model/autenticacao-dto";

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient, private router: Router) {}

  autenticacao(autenticacaoDto: AutenticacaoDto): Observable<any> {
    const email = autenticacaoDto.email;
    return this.http.post(environment.hostUrl + 'autenticacao', autenticacaoDto, {responseType: 'text'})
      .pipe(map(response => {
          const token = response;
          if (token) {
            localStorage.setItem('currentUser', JSON.stringify({ email, token }));
          }
          return response;
        })
      );
  }

  sair() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  obterUsuarioAtual() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      return JSON.parse(currentUser);
    }
    return null;
  }

  estaLogado() {
    const usuarioAtual = this.obterUsuarioAtual();
    return usuarioAtual && usuarioAtual.token;
  }

  obterAuthorizationToken() {
    const usuarioAtual = this.obterUsuarioAtual();
    if (usuarioAtual) {
      return `Bearer ${usuarioAtual.token}`;
    }
    return '';
  }
}
