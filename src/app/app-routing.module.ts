import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/common/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminConnexionComponent } from './component/admin/admin-connexion/admin-connexion.component';
import { SportsListComponent } from './component/sports/sports-list/sports-list.component';
import { SportsReadComponent } from './component/sports/sports-read/sports-read.component';
import { SportsEditComponent } from './component/sports/sports-edit/sports-edit.component';
import { ForbiddenComponent } from './component/admin/forbidden/forbidden.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/connexion', component: AdminConnexionComponent},
  {path: 'sports', component: SportsListComponent},
  {path: 'sports/create', component: SportsEditComponent, data: {edit: false}},
  {path: 'sports/:id', component: SportsReadComponent},
  {path: 'sports/:id/edit', component: SportsEditComponent, data: {edit: true}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
