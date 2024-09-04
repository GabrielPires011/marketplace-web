import { Component, OnInit } from '@angular/core';
import {DadosDetalhadosCieloLog} from "../../model/dados-detalhados-cielo-log";
import {CieloLogService} from "../../service/cielo-log.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-visualizar-log-cielo',
  templateUrl: './visualizar-log-cielo.component.html',
  styleUrls: ['./visualizar-log-cielo.component.css']
})
export class VisualizarLogCieloComponent implements OnInit {

  log: DadosDetalhadosCieloLog | undefined;
  constructor(private cieloLogService: CieloLogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.buscar(id);
    });
  }

  buscar(id: any): void {
    this.cieloLogService.buscar(id).subscribe(log => {
      this.log = log;
    })
  }

  voltar() {
    this.router.navigate(['/log']);
  }
}
