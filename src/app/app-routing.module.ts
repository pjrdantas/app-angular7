import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home/home.component';
import { MenuComponent } from '../app/menu/menu/menu.component';
import { UsuarioCadastroComponent } from '../app/usuario/cadastro/usuario-cadastro/usuario-cadastro.component';
import { UsuarioConsultaComponent } from '../app/usuario/consulta/usuario-consulta/usuario-consulta.component';

const appRoutes: Routes = [
{path: 'home', component: HomeComponent},

{path: 'menu', component: MenuComponent},
{path: 'usuario-consulta', component: UsuarioConsultaComponent},
{path: 'usuario-cadastro', component: UsuarioCadastroComponent},
{path: 'usuario-cadastro/:id', component: UsuarioCadastroComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
