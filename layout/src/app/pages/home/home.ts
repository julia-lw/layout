import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [ CommonModule ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  requisicao=[
    {
      tecnologia: 'HTML',
      descricao: 'O HTML (HyperText Markup Language ou Linguagem de Marcação de Hipertexto) é a linguagem base da internet, utilizada para estruturar e organizar o conteúdo de páginas web. Ele não é considerado uma linguagem de programação, pois não lida com lógica complexa, mas sim com a marcação de elementos como textos, imagens e links.'
    },
    {
      tecnologia: 'CSS',
      descricao: 'Se o HTML é o esqueleto, o CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é a aparência da página. Ele é usado para definir cores, fontes, espaçamentos e o layout de um site.'
    },
    {
      tecnologia: 'JavaScript',
      descricao: 'Se o HTML é o esqueleto e o CSS é a pele, o JavaScript (JS) é o cérebro e os músculos. Ele é a linguagem de programação que traz interatividade e dinamismo para as páginas web.'
    }
  ];
}
