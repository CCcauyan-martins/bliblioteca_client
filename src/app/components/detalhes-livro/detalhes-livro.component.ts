import { Component } from '@angular/core';
import { BibliotecaServiceService } from '../../services/biblioteca-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes-livro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes-livro.component.html',
  styleUrl: './detalhes-livro.component.css'
})
export class DetalhesLivroComponent {
  book: any;
  detalhesUser: any;
  
  constructor(private bibliotecaService: BibliotecaServiceService, private route: ActivatedRoute) {}

  //METODO USADO NA INICIALIZAÇÃO DO COMPONENTE
  ngOnInit(): void {
    this.initBook();
  }

  private initBook() {
    const libraryId = this.route.snapshot.paramMap.get('biblioteca');
    const bookId = this.route.snapshot.paramMap.get('livro');

    //ATRIBUINDO A UMA VARIAVEL O VALOR DO PARAMETRO PASSADO NA URL (detalhes-user)
    this.detalhesUser = this.route.snapshot.paramMap.get('detalhes-user');

    if(libraryId != null && bookId != null) {
      this.getSpecificBook(libraryId, bookId);
    }

  }

  //METODO QUE RECEBE A RESPOSTA DA REQUISIÇÃO DO SERVIÇO E O SUBSCREVE
  getSpecificBook(libraryId:string, bookId:string) {
    this.bibliotecaService.getBook(libraryId, bookId).subscribe(
      (value) => {
        this.book = value;
      }
    )  
  }


  

}
