import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {
  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2021, 7, 10), dataPagamento: null, valor: 4.55, pessoa: 'Padaria Canindé' },
    { tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2021, 7, 2), dataPagamento: new Date(2021, 7, 1), valor: 8000, pessoa: 'Atacadão' },
    { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2021, 7, 5), dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda' },
    { tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: new Date(2021, 7, 10), dataPagamento: new Date(2021, 7, 3), valor: 800, pessoa: 'Escola CPI' },
    { tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: new Date(2021, 7, 22), dataPagamento: null, valor: 55000, pessoa: 'Antônio da Silva' },
    { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date(2021, 7, 7), dataPagamento: new Date(2021, 7, 6), valor: 1750, pessoa: 'Imobiliária Rocha e Rocha' },
    { tipo: 'DESPESA', descricao: 'Mensalidade da academia', dataVencimento: new Date(2021, 7, 3), dataPagamento: null, valor: 180, pessoa: 'Academia Selfit' }
  ]
}
