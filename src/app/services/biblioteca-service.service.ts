import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Biblioteca } from '../model/Biblioteca';


@Injectable({
  providedIn: 'root'
})
export class BibliotecaServiceService {
  private servidor = "http://193.136.62.24";

  constructor(private http: HttpClient) {
  }

  getLibraries(){
    const url = this.servidor+'/v1/library';
    return this.http.get<Biblioteca[]>(url);
  }

  public getCurrentLibrary(uuid: string|null ){
    const url = this.servidor+'/v1/library/' + uuid;
    return this.http.get<Biblioteca>(url);
  }

  //METODO DO LADO DO SERVIÇO QUE RETORNA OS LIVROS
  getLibraryBook(libraryId:string) {
    //https://193.136.62.24/v1/library/bb385aa2-866f-419b-85fd-202ecec8cfde/book
    const url = this.servidor+'/v1/library/'+libraryId+'/book'; 
    return this.http.get<any>(url);
  }

  //METODO DO LADO DO SERVIÇO QUE RETORNA UM LIVRO ESPECIFICO DE UMA BIBLIOTECA
  getBook(libraryId:string, bookId:string) {
    const url = this.servidor+'/v1/library/'+libraryId+'/book/'+bookId; 
    return this.http.get<any>(url);
  }

  //METODOS PARA HISTORICO E CHECKOUT
  getCheckedOutBooks(userId:string) {
    //https://193.136.62.24/v1/user/checked-out?userId=Wonderful%20User
    const url = this.servidor+'/v1/user/checked-out?userId='+ userId; 
    return this.http.get<any>(url);
  }

  getCheckedHistory(userId: string) {
    //https://193.136.62.24/v1/user/checkout-history?userId=Wonderful%20User
    const url = this.servidor+'/v1/user/checkout-history?userId='+ userId; 
    return this.http.get<any>(url);
  }

}
