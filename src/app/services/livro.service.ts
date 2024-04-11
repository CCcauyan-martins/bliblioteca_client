import { Injectable } from '@angular/core';
import { BibliotecaServiceService } from './biblioteca-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private bibliotecaService: BibliotecaServiceService, private http: HttpClient) { 

  }

  

}
