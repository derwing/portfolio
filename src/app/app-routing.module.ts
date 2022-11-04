import { HomeComponent } from './pages/home/home.component';
import { PROJECTS_ROUTE } from './pages/projects/projects.route';
import { EDUCATION_ROUTE } from './pages/education/education.route';
import { HOME_ROUTE } from './pages/home/home.route';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [HOME_ROUTE, EDUCATION_ROUTE, PROJECTS_ROUTE];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        // {
        //   path: 'admin',
        //   data: {
        //     authorities: [Authority.ADMIN],
        //   },
        //   canActivate: [UserRouteAccessService],
        //   loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule),
        // },
        // {
        //   path: 'account',
        //   loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
        // },
        {
          path: '',
          component: HomeComponent
        },
        ...routes,
      ],
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
