import { Component } from '@angular/core';
import { BibliotecaServiceService } from '../../services/biblioteca-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-livro',
  standalone: true,
  imports: [],
  templateUrl: './detalhes-livro.component.html',
  styleUrl: './detalhes-livro.component.css'
})
export class DetalhesLivroComponent {
  book: any;
  constructor(private bibliotecaService: BibliotecaServiceService, private route: ActivatedRoute) {}

  //METODO USADO NA INICIALIZAÇÃO DO COMPONENTE
  ngOnInit(): void {
    this.initBook();
  }

  private initBook() {
    const libraryId = this.route.snapshot.paramMap.get('biblioteca');
    const bookId = this.route.snapshot.paramMap.get('livro');

    if(libraryId != null && bookId != null) {
      this.getSpecificBook(libraryId, bookId);
    }

  }

  getSpecificBook(libraryId:string, bookId:string) {
    this.bibliotecaService.getBook(libraryId, bookId).subscribe(
      (value) => {
        console.log(value);
        this.book = value;
      }
    )
    
  }

}
