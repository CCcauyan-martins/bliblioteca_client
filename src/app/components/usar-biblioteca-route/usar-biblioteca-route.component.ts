import { Component, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { BibliotecaServiceService } from '../../services/biblioteca-service.service';
import { Biblioteca } from '../../model/Biblioteca';
import { SelecionaBibliotecaComponent } from '../seleciona-biblioteca/seleciona-biblioteca.component';
import { AppService } from '../../services/app.service';


@Component({
  selector: 'usar-biblioteca-route',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SelecionaBibliotecaComponent
  ],
  templateUrl: './usar-biblioteca-route.component.html',
  styleUrl: './usar-biblioteca-route.component.css'
})
export class UsarBibliotecaRouteComponent implements OnInit{
  biblioteca:Biblioteca;
  books: any = [];
  userId:string='';
  @Input('selectedLibraryId') libraryId='';

  constructor(private bibliotecaService: BibliotecaServiceService, private route:ActivatedRoute, private appService: AppService, private router: Router) {
    this.biblioteca = {} as Biblioteca;
    this.appService.getUserId.subscribe(
      result => this.userId = result
    );
  }

  //METODO CHAMADO NA INICIALIZAÇÃO DO COMPONENTE
  ngOnInit(): void {
    this.initBiblioteca();
  }

  //METODO QUE CHAMA OS METODOS QUE BUSCAM AS INFORMAÇÕES DA BIBLIOTECA E LIVROS
  private initBiblioteca() {
    const id = this.route.snapshot.paramMap.get('biblioteca');
    console.log(id);
    if(id != null) {
      this.getBiblioId(id);
      this.getLibraryBook(id);
    }
    
  }
  //METODO QUE PEGA AS INFORMAÇÕES DA BIBLIOTECA
  getBiblioId(id:string){
    this.bibliotecaService.getCurrentLibrary(id).subscribe(
      value => this.biblioteca = <Biblioteca>value
    );
  }

  //METODO PARA PEGAR OS LIVROS DA BIBLIOTECA
  getLibraryBook(id:string) {
    this.bibliotecaService.getLibraryBook(id).subscribe(
      value=> this.books = <any>value
    )
  }

  //METODO PARA MANDAR O ISBN DO LIVRO PARA A URL
  
  goToBook(isbn: any) {
    //pegar o library ID e BookId e fazer url
    let url = 'detalhes/'+this.biblioteca.id+'/'+isbn;
    console.log(url);
    this.router.navigateByUrl(url);
  };

  
}
