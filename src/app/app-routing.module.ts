import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/common/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminConnexionComponent } from './component/admin/admin-connexion/admin-connexion.component';
import { SportsListComponent } from './component/sports/sports-list/sports-list.component';
import { SportsReadComponent } from './component/sports/sports-read/sports-read.component';
import { SportsEditComponent } from './component/sports/sports-edit/sports-edit.component';
import { ForbiddenComponent } from './component/admin/forbidden/forbidden.component';
import { MemberofComponent } from './component/graph/memberof/memberof.component';
import { IndexComponent } from './component/graph/index/index.component';
import { TestComponent } from './component/test/test.component';
import { PurgeComponent } from './component/admin/purge/purge.component';
import { CategoriesListComponent } from './component/categories/categories-list/categories-list.component';
import { SportComponent } from './component/graph/sport/sport.component';
import { CategoriesComponent } from './component/graph/categories/categories.component';
import { SportsEditCategoriesComponent } from './component/sports/sports-edit-categories/sports-edit-categories.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'test', component: TestComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/connexion', component: AdminConnexionComponent},
  {path: 'admin/purge', component: PurgeComponent},
  {path: 'sports', component: SportsListComponent},
  {path: 'sports/create', component: SportsEditComponent, data: {edit: false}},
  {path: 'sports/:id', component: SportsReadComponent},
  {path: 'sports/:id/edit', component: SportsEditComponent, data: {edit: true}},
  {path: 'sports/:id/edit/categories', component: SportsEditCategoriesComponent},
  {path: 'categories', component: CategoriesListComponent},
  {path: 'graph/index', component: IndexComponent},
  {path: 'graph/sports', component: SportComponent},
  {path: 'graph/categories', component: CategoriesComponent},
  {path: 'graph/memberof', component: MemberofComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
