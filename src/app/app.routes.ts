import { Routes } from '@angular/router';
import { UsarBibliotecaRouteComponent } from './components/usar-biblioteca-route/usar-biblioteca-route.component';
import { SelecionaBibliotecaComponent } from './components/seleciona-biblioteca/seleciona-biblioteca.component';
import { DetalhesLivroComponent } from './components/detalhes-livro/detalhes-livro.component';

export const routes: Routes = [
  { path: '', redirectTo: '/selecionaBiblioteca', pathMatch: 'full' },
  { path: 'selecionaBiblioteca', component: SelecionaBibliotecaComponent },
  { path: 'biblio/:biblioteca', component: UsarBibliotecaRouteComponent },
  //biblio/:biblioteca/:livro
  { path: 'biblio/:biblioteca/:livro', component: DetalhesLivroComponent},
  { path: '**', redirectTo: '/selecionaBiblioteca' },
];
