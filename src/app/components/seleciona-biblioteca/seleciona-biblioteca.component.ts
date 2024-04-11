import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Biblioteca } from '../../model/Biblioteca';
import { BibliotecaServiceService } from '../../services/biblioteca-service.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'seleciona-biblioteca',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './seleciona-biblioteca.component.html',
  styleUrl: './seleciona-biblioteca.component.css'
})
export class SelecionaBibliotecaComponent implements OnInit{
  libraries: Biblioteca[]=[];
  @Output() updateBibioteca = new EventEmitter <string> ();

  constructor(private biblioService: BibliotecaServiceService, private router: Router ) {}

  ngOnInit(): void {
    this.biblioService.getLibraries().subscribe(value => this.libraries = value);
  }

  goToBibiloteca(biblioId: any){
    let url = '/biblio/' + biblioId;
    this.updateBibioteca.emit(biblioId);
    this.router.navigateByUrl(url);
  }


}
