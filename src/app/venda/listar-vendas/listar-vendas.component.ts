import { Component, OnInit } from '@angular/core';
import { VendasService } from '../../service/vendas.service';
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {CancelarPagamentoDto} from "../../model/cancelar-pagamento-dto";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-listar-vendas',
  templateUrl: './listar-vendas.component.html',
  styleUrls: ['./listar-vendas.component.css']
})
export class ListarVendasComponent implements OnInit {


  displayedColumns: string[] = ['id', 'descricao', 'valor', 'status', 'acoes'];
  vendas = new MatTableDataSource<any>([]);

  constructor(private vendasService: VendasService, private router: Router, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.carregarVendas();
  }

  carregarVendas(): void {
    this.vendasService.listarVendas().subscribe(vendas => {
      this.vendas.data = vendas;
    });
  }

  criarVenda(): void {
    this.router.navigate(['/venda/novo']);
  }

  cancelarVenda(venda: any): void {
    const cancelarPagamentoDto = new CancelarPagamentoDto();
    cancelarPagamentoDto.id = venda.id;
    this.vendasService.cancelarVenda(cancelarPagamentoDto).subscribe(() => {
      this.carregarVendas();
      this.toastr.success('Venda cancelada com sucesso.');
    },
      (error) => {
        this.toastr.error(error.error, 'Erro em cancelar venda!');
      })
    ;
  }

}

