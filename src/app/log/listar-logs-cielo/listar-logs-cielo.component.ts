import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {CieloLogService} from "../../service/cielo-log.service";

@Component({
  selector: 'app-listar-vendas',
  templateUrl: './listar-logs-cielo.component.html',
  styleUrls: ['./listar-logs-cielo.component.css']
})
export class ListarLogsCieloComponent implements OnInit {


  displayedColumns: string[] = ['idPagamento', 'dataOperacao', 'statusResposta', 'codigoResposta', 'mensagemResposta','acoes'];
  logs = new MatTableDataSource<any>([]);

  constructor(private cieloLogService: CieloLogService, private router: Router) { }
  ngOnInit(): void {
    this.carregarVendas();
  }

  carregarVendas(): void {
    this.cieloLogService.listar().subscribe(logs => {
      this.logs.data = logs;
    });
  }

  visualizar(log: any): void {
    this.router.navigate(['/log/visualiza'], { queryParams: { id: log.id } });
  }


}
