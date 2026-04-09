import { Routes } from '@angular/router';
import { Inicio } from './paginaPublic/inicio/inicio';
import { Login } from './paginaPublic/login/login';
import path from 'path';
import { Acerca } from './paginaPublic/acerca/acerca';
import { Contactanos } from './paginaPublic/contactanos/contactanos';
import { PanelAdministrador } from './paginaPrivada/panel-administrador/panel-administrador';

export const routes: Routes = [
    {path:'', component: Inicio},
    {path:'login',component:Login},
    {path:'acerca', component:Acerca},
    {path:'contactanos', component:Contactanos},
    {path:'admin', component: PanelAdministrador},
    {path:'**', redirectTo:''}     
];
