import { Routes } from '@angular/router';
import { UsarBibliotecaRouteComponent } from './components/usar-biblioteca-route/usar-biblioteca-route.component';
import { SelecionaBibliotecaComponent } from './components/seleciona-biblioteca/seleciona-biblioteca.component';
import { DetalhesLivroComponent } from './components/detalhes-livro/detalhes-livro.component';
import { UtilizadoresTabComponent } from './components/utilizadores-tab/utilizadores-tab.component';

export const routes: Routes = [
  { path: '', redirectTo: '/selecionaBiblioteca', pathMatch: 'full' },
  { path: 'selecionaBiblioteca', component: SelecionaBibliotecaComponent },
  { path: 'biblio/:biblioteca', component: UsarBibliotecaRouteComponent },
  //biblio/:biblioteca/:livro
  { path: 'detalhes/:biblioteca/:livro', component: DetalhesLivroComponent},
  { path: ':detalhes-user/:biblioteca/:livro', component: DetalhesLivroComponent },
  //para os utilizadores
  { path: 'utilizadores', component: UtilizadoresTabComponent},
  { path: '**', redirectTo: '/selecionaBiblioteca' },
];

/*
  OBS: Na rota acima:{ path: ':detalhes-user/:biblioteca/:livro', component: DetalhesLivroComponent },
       
       O " : " (dois pontos) indica que isso é uma "parametro" que conterá um valor, ou seja, ao passar,
       para a URL em (utilizadores-component) 'detalhes-user' podemos considerar que:
       :detalhes-user = 'detalhes-user'
       
       E por isso, que ao usar o metodo do serviço Activity Route :
       this.route.snapshot.paramMap.get('detalhes-user')
       Eu consigo atribuir a uma variavel o valor 'detalhes-livros', pois esse metodo 
       apenas pega o VALOR contido no parametro.
  */
