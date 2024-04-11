import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SelecionaBibliotecaComponent } from './components/seleciona-biblioteca/seleciona-biblioteca.component';
import { HttpClientModule } from '@angular/common/http';
import { BibliotecaServiceService } from './services/biblioteca-service.service';
import { UsarBibliotecaRouteComponent } from './components/usar-biblioteca-route/usar-biblioteca-route.component';
import { AppService } from './services/app.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterOutlet,
    RouterModule,
    HttpClientModule,
    SelecionaBibliotecaComponent,
    UsarBibliotecaRouteComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[
    BibliotecaServiceService,
    AppService
  ],
})
export class AppComponent {
  title = 'biblioteca-client';
  selectedUser = 'Wonderful User';
  options = [
    { label: 'Administrador', value: 'Wonderful User' },
    { label: 'Utilizador', value: 'TWAM' }
  ];

  constructor(private appService: AppService) { }

  updateUser(){
    this.appService.setUserId(this.selectedUser);
  }

}
