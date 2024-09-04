import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environment";
import {CriarPagamentoDto} from "../model/criar-pagamento-dto";
import {CancelarPagamentoDto} from "../model/cancelar-pagamento-dto";
import {DadosDetalhadosCieloLog} from "../model/dados-detalhados-cielo-log";
@Injectable({
  providedIn: 'root'
})
export class CieloLogService {
  private apiURL = environment.hostUrl + 'cielo-log';
  constructor(private http: HttpClient) { }
  listar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/lista`);
  }

  buscar(id: string): Observable<DadosDetalhadosCieloLog> {
    return this.http.get<DadosDetalhadosCieloLog>(`${this.apiURL}/${id}`);
  }
}

