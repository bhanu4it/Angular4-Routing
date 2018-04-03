import { Router, Routes } from "@angular/router";
import { LoginComponent } from "./authentication/login/login.component";

export const routing: Routes = [
    {
        path : '',
        redirectTo : 'login',
        pathMatch: 'full'
  },

    {
        path : 'login',
        component : LoginComponent
    }
]