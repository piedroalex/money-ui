import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '10/07/2021', dataPagamento: null, valor: 4.55, pessoa: 'Padaria Canindé' },
    { tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '02/07/2021', dataPagamento: '01/07/2021', valor: 8000, pessoa: 'Atacadão' },
    { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: '05/07/2021', dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda' },
    { tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: '10/07/2021', dataPagamento: '03/07/2021', valor: 800, pessoa: 'Escola CPI' },
    { tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: '22/07/2021', dataPagamento: null, valor: 55000, pessoa: 'Antônio da Silva' },
    { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: '07/07/2021', dataPagamento: '06/07/2021', valor: 1750, pessoa: 'Imobiliária Rocha e Rocha' },
    { tipo: 'DESPESA', descricao: 'Mensalidade da academia', dataVencimento: '03/07/2021', dataPagamento: null, valor: 180, pessoa: 'Academia Selfit' }
  ]
}
