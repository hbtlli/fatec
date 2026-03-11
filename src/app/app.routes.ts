import { Routes } from '@angular/router';
import { Contato } from './contato/contato';
import { Vitrine } from './vitrine/vitrine';

export const routes: Routes = [
    {path:"contato", component:Contato},
    {path:"fale-conosco", component:Contato},
    {path:"", component:Vitrine},
    {path:"vitrine", component:Vitrine},
];
