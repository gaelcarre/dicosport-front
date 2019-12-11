import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { StorageServiceModule } from 'angular-webstorage-service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/common/header/header.component';
import { FooterComponent } from './component/common/footer/footer.component';
import { HomeComponent } from './component/common/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { NewsListComponent } from './component/news/news-list/news-list.component';
import {NewsService} from './service/news.service';
import {AuthentService} from './service/authent.service';
import {ConstantProvider} from './const';
import { AdminComponent } from './component/admin/admin.component';
import { AdminConnexionComponent } from './component/admin/admin-connexion/admin-connexion.component';
import { SportsListComponent } from './component/sports/sports-list/sports-list.component';
import { SportsService } from './service/sports.service';
import { FilterPipe } from './util/filter.pipe';
import { SportsReadComponent } from './component/sports/sports-read/sports-read.component';
import { SportsEditComponent } from './component/sports/sports-edit/sports-edit.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { CategoriesService } from './service/categories.service';
import { MembershipService } from './service/membership.service';
import { TokenInterceptor } from './service/token.interceptor';
import { ForbiddenComponent } from './component/admin/forbidden/forbidden.component';
import { FilterWithoutDescPipe } from './util/filterWithoutDesc.pipe';
import { FilterTooLongPipe } from './util/filterTooLong.pipe';
import { FilterWithoutImagePipe } from './util/filterWithoutImage.pipe';
import { ErrorComponent } from './component/common/error/error.component';
import { ErrorService } from './service/error.service';
import { MemberofComponent } from './component/graph/memberof/memberof.component';
import { IndexComponent } from './component/graph/index/index.component';
import { TestComponent } from './component/test/test.component';
import { CategoriesListComponent } from './component/categories/categories-list/categories-list.component';
import { SuccessComponent } from './component/common/success/success.component';
import { SuccessService } from './service/success.service';
import { PurgeComponent } from './component/admin/purge/purge.component';
import { AdminService } from './service/admin.service';
import { FilterWithoutCategoryPipe } from './util/filterWithoutCategory.pipe';
import { SportComponent } from './component/graph/sport/sport.component';
import { TotalComponent } from './component/graph/total/total.component';
import { CategoriesComponent } from './component/graph/categories/categories.component';
import { GraphService } from './service/graph.service';
import { SportsEditCategoriesComponent } from './component/sports/sports-edit-categories/sports-edit-categories.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewsListComponent,
    AdminComponent,
    AdminConnexionComponent,
    SportsListComponent,
    FilterPipe,
    FilterWithoutDescPipe,
    FilterTooLongPipe,
    FilterWithoutImagePipe,
    FilterWithoutCategoryPipe,
    SportsReadComponent,
    SportsEditComponent,
    ForbiddenComponent,
    ErrorComponent,
    MemberofComponent,
    IndexComponent,
    TestComponent,
    CategoriesListComponent,
    SuccessComponent,
    PurgeComponent,
    SportComponent,
    TotalComponent,
    CategoriesComponent,
    SportsEditCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    StorageServiceModule,
    FormsModule,
    SelectDropDownModule
  ],
  providers: [
    ErrorService,
    SuccessService,
    NewsService,
    ConstantProvider,
    AuthentService,
    SportsService,
    AdminService,
    CategoriesService,
    GraphService,
    MembershipService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
