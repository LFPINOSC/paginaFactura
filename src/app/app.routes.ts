import { Routes } from '@angular/router';
import { Inicio } from './paginaPublic/inicio/inicio';
import { Login } from './paginaPublic/login/login';
import path from 'path';
import { Acerca } from './paginaPublic/acerca/acerca';
import { Contactanos } from './paginaPublic/contactanos/contactanos';
import { PanelAdministrador } from './paginaPrivada/panel-administrador/panel-administrador';
import { authGuard } from './Servicios/auth.guarda';
import { LayoutPanel } from './paginaPrivada/layout-panel/layout-panel';
import { PaginaCiudad } from './paginaPrivada/pagina-ciudad/pagina-ciudad';
import { PaginaCliente } from './paginaPrivada/pagina-cliente/pagina-cliente';
import { LayoutPanelPublic } from './paginaPublic/layout-panel-public/layout-panel-public';

export const routes: Routes = [
    {path:'', component: LayoutPanelPublic,
        children:[
               {path:'',component:Inicio},
               {path:'login',component:Login},
               {path:'acerca', component:Acerca},
               {path:'contactanos', component:Contactanos},
        ]
    },
 
    {
        path:'admin',
        component: LayoutPanel,
        canActivate:[authGuard],
        children:[
            {path:'',component:PanelAdministrador},
            {path:'ciudad',component:PaginaCiudad},
            {path:'cliente',component:PaginaCliente},
        ]
    },
    {path:'**', redirectTo:''}     
];
