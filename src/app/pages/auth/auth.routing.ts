import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

export const AuthRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AuthComponent
      }
    ]
  }
];
