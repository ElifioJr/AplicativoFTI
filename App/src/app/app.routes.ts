import { Routes } from '@angular/router';
import { FormularioCadastroComponent } from './pages/formulario-cadastro/formulario-cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EditarComponent } from './pages/editar/editar.component';

export const routes: Routes = [
  {path:'cadastro', component: CadastroComponent},
  {path: '', component: HomeComponent},
  {path:'editar', component: EditarComponent}
];
