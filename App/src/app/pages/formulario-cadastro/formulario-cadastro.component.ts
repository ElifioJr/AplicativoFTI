import { UsuarioLista } from './../../models/usuario';
import { Component, EventEmitter, input, Input, OnInit, Output, output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-formulario-cadastro',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario-cadastro.component.html',
  styleUrl: './formulario-cadastro.component.css'
})
export class FormularioCadastroComponent implements OnInit   {
  @Output () onSubmit = new EventEmitter<UsuarioLista>();
  @Input() btnAcao! : string;
  @Input () btnTitulo!: string;
  @Input() dadosUsuario : UsuarioLista | null = null;
  usuarioForm!: FormGroup;

  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      id: new FormControl(this.dadosUsuario ? this.dadosUsuario.idusuario : 0 ),
      nome: new FormControl(this.dadosUsuario ? this.dadosUsuario.nome :  ''),
      email: new FormControl(this.dadosUsuario ? this.dadosUsuario.email : ''),
      sexo: new FormControl(this.dadosUsuario ? this.dadosUsuario.sexo :''),
      idade: new FormControl(this.dadosUsuario ? this.dadosUsuario.idade :''),
      senha: new FormControl(this.dadosUsuario ? this.dadosUsuario.senha :''),

    });
  }
  submit(){
    this.onSubmit.emit(this.usuarioForm.value);
  }
}
