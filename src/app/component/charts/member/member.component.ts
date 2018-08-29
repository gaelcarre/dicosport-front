import { Component, OnInit } from '@angular/core';
import { Sport } from '../../../pojo/Sport';
import { Category } from '../../../pojo/Category';
import { SportsService } from '../../../service/sports.service';
import { CategoriesService } from '../../../service/categories.service';
import { HttpErrorResponse } from '../../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  private sports: Sport[];
  private categories: Category[];

  constructor(private sportsService: SportsService, private categoriesService: CategoriesService) { }

  ngOnInit() {

    this.getSports();
    this.getCategories();

  }

  private getSports() {
    this.sportsService.getSports()
    .subscribe(
      (sports: Sport[]) => {
        this.sports = sports;
      },
      error => this.traiterErreur(error)
    );
  }

  private getCategories() {
    this.categoriesService.getCategories()
    .subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      },
      error => this.traiterErreur(error)
    );
  }

  traiterErreur(err: HttpErrorResponse) {
    console.log(err);
  }

}
