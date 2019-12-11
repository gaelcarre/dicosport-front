import { Component, OnInit } from '@angular/core';
import { Category } from '../../../pojo/Category';
import { CategoriesService } from '../../../service/categories.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../../../service/error.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  private categories: Category[];

  constructor(private categoriesService: CategoriesService, private errorService: ErrorService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getCategories()
    .subscribe(
      (categories: Category[]) => {
        this.categories = categories;
        // this.successService.changeSuccess('Sport loaded with success');
      },
      error => this.traiterErreur(error)
    );
  }

  traiterErreur(err: HttpErrorResponse) {
    this.errorService.changeError('Technical Issue: ' + err.message);
  }

}
