import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Home } from './pages/home/home';
import { Farmador } from './pages/farmador/farmador';
import { Moggador } from './pages/moggador/moggador';

@Component({
  selector: 'app-root',
  imports: [ RouterLink, RouterOutlet, Header, Footer, Home, Farmador, Moggador ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('layout');
}
