import { Component, OnInit, Output } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioLista } from '../../models/usuario';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  usuarioForm! : FormGroup


  usuarios: UsuarioLista[] = [];
  constructor(private serviceUsuario: UsuarioService){}


  ngOnInit(): void {
    this.serviceUsuario.GetUsuarios().subscribe(response => {
      this.usuarios = response
    }),

    this.usuarioForm = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl(''),
      senha: new FormControl(''),
      email: new FormControl(''),
      idade: new FormControl(0),
      sexo: new FormControl('')
    })
  }

  submit(){
    console.log(this.usuarioForm.value)
  }

  deletar(id: number | undefined){
    this.serviceUsuario.ExcluirUsuario(id).subscribe(response =>{
      window.location.reload()
    })
  }

  criarUsuario(usuarioForm : UsuarioLista){
    this.serviceUsuario.CadastrarUsuario(usuarioForm).subscribe(response => {
      console.log(response)
    })
  }
}
