import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';
import { DashboardPageModule } from './admin/dashboard/dashboard.module';
import { LoginPage } from './authentication/login/login.page';
const routes: Routes = [
  {
    path: '',
    component: LoginPage,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
      
  },
  { path: 'dashboard', component: DashboardPageModule },
  {
    path: 'register',
    loadChildren: () =>
      import('./authentication/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
      pathMatch:'full'
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./authentication/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
