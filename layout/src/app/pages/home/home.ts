import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  requisicao=[
    {
      tecnologia: 'HTML',
      descricao: 'Estrutura/"esqueleto" da página'
    },
    {
      tecnologia: 'CSS',
      descricao: 'Estilização/visual da página'
    },
    {
      tecnologia: 'JavaScript',
      descricao: 'Lógica/"cérebro" da página'
    }
  ];
}
