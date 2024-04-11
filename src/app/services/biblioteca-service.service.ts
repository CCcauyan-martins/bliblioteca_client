import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Biblioteca } from '../model/Biblioteca';
import { UsarBibliotecaRouteComponent } from '../components/usar-biblioteca-route/usar-biblioteca-route.component';


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

}