import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routeGuard } from './routeguard/route.guard';
import { HomeComponent } from './features/home/home.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';



const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
     loadChildren: () => import('./Auth/auth-module/auth.module').then((m) => m.AuthModule),
   },
  {
    path: 'home',
    canActivate: [routeGuard],
    component:HomeComponent,
    
  },
  {
     path: 'dashboard',
     component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}