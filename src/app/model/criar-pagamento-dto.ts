import {CriarCartaoDto} from "./criar-cartao-dto";

export class CriarPagamentoDto {
  valor?: number;
  descricao?: string;
  formaDePagamento?: string;
  criarCartaoDto?: CriarCartaoDto;
}
