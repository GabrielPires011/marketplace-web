import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CriarCartaoDto} from "../../model/criar-cartao-dto";
import {CriarPagamentoDto} from "../../model/criar-pagamento-dto";
import {VendasService} from "../../service/vendas.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-criar-venda',
  templateUrl: './criar-venda.component.html',
  styleUrls: ['./criar-venda.component.css']
})
export class CriarVendaComponent implements OnInit {
  vendaForm: FormGroup;

  constructor(private fb: FormBuilder, private service: VendasService, private router: Router, private toastr: ToastrService) {
    this.vendaForm = this.fb.group({
      nomeCliente: ['', Validators.required],
      numeroCartao: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d*$/),
          Validators.maxLength(16),
          Validators.minLength(16)
        ]
      ],
      validadeCartao: ['',         [
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\/\d{4}$/)
      ]],
      formaDePagamento: ['', Validators.required],
      cvv: ['',
        [
          Validators.required,
          Validators.pattern(/^\d*$/),
          Validators.maxLength(3),
          Validators.minLength(3)
        ]],
      valorVenda: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.vendaForm.valid) {
      const formData = this.vendaForm.value;

      console.log(formData)

      const cartao = new CriarCartaoDto();
      cartao.nome = formData.nomeCliente;
      cartao.codigo = formData.cvv;
      cartao.numero = formData.numeroCartao;
      cartao.expiracao = formData.validadeCartao;

      const pagamento = new CriarPagamentoDto();

      pagamento.criarCartaoDto = cartao;
      pagamento.formaDePagamento = formData.formaDePagamento;
      pagamento.descricao = formData.descricao;
      pagamento.valor = formData.valorVenda;

      this.service.criarVenda(pagamento).subscribe(
        () => {
          this.router.navigate(['/venda']);
          this.toastr.success('Venda criada com sucesso.');
        },
        (error) => {
          this.toastr.error(error.error, 'Erro em criar venda!');
        })
    }
  }

  voltar(): void  {
    this.router.navigate(['/venda']);
  }
}
