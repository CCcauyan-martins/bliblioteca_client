import { Component } from '@angular/core';
import { BibliotecaServiceService } from '../../services/biblioteca-service.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-utilizadores-tab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utilizadores-tab.component.html',
  styleUrl: './utilizadores-tab.component.css'
})
export class UtilizadoresTabComponent {
  selectedUser = 'Wonderful User';
  checkouts: any = [];
  history: any = [];  

  constructor(private bibliotecaService: BibliotecaServiceService, private route: ActivatedRoute, private router: Router){}
  
  ngOnInit() :void {
    this.initCheckOut(this.selectedUser);
  }

  initCheckOut(selectedUser:string) {
      this.getCheckOutBooks(selectedUser)
      this.getCheckOutHistory(selectedUser)
  }

  //METODO QUE BUSCA OS LIVROS EM CHECKOUT DE UM USER
  getCheckOutBooks(selectedUser: string) {
    this.bibliotecaService.getCheckedOutBooks(selectedUser).subscribe(
      (value) => {
        this.checkouts = value
        
      }
    )
  }

  //METODO QUE BUSCA O HISTORICO DE LIVROS ALUGADOS DE UM USER
  getCheckOutHistory(selectedUser: string) {
     this.bibliotecaService.getCheckedHistory(selectedUser).subscribe(
      (value) => {
        this.history = value.slice(0, 12);
      }
     )
  }

  //METODO QUE PEGA OS PARAMS QUE PRECISO, CONSTROI A URL VALIDA E ABRE O COMPONENT DE DETALHES-USER
  goToBook(badLibraryId:string, bookId: string) {
    console.log(badLibraryId, bookId)

    //CONSTROI MINHA URL VALIDA
    let libraryId = badLibraryId.substring(0, 8) + "-" +
                    badLibraryId.substring(8, 12) + "-" +
                    badLibraryId.substring(12, 16) + "-" +
                    badLibraryId.substring(16, 20) + "-" +
                    badLibraryId.substring(20);

    let url = 'detalhes-user/'+libraryId+'/'+bookId;
    this.router.navigateByUrl(url);
  }

}
