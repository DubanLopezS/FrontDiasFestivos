import { Routes } from '@angular/router';
import { FestivosComponent } from '../features/componentes/festivos/festivos';
import { VerificarComponent } from '../features/componentes/verificar/verificar';


export const routes: Routes = [
    { path: "", redirectTo: "festivos", pathMatch: "full" },
    { path: "festivos", component: FestivosComponent },
    { path: "verificar", component: VerificarComponent }
];
