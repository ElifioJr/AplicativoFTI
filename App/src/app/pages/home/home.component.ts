import { Component, OnInit, Output } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioLista } from '../../models/usuario';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from 'stream';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  usuarios: UsuarioLista[] = [];
  constructor(private serviceUsuario: UsuarioService){}


  ngOnInit(): void {
    this.serviceUsuario.GetUsuarios().subscribe(response => {
      this.usuarios = response
    })
  }

  deletar(id: number | undefined){
    this.serviceUsuario.ExcluirUsuario(id).subscribe(response =>{
      window.location.reload()
    })
  }
}
