import { Component, OnInit } from '@angular/core';
import { Sport } from '../../../pojo/Sport';
import { SportsService } from '../../../service/sports.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../../../service/error.service';
import { Category } from '../../../pojo/Category';

@Component({
  selector: 'app-sports-edit-categories',
  templateUrl: './sports-edit-categories.component.html',
  styleUrls: ['./sports-edit-categories.component.css']
})
export class SportsEditCategoriesComponent implements OnInit {

  private sport: Sport;
  private sportCategories: Category[];
  private categories: Category[];

  constructor(private router: Router, private errorService: ErrorService,
    private route: ActivatedRoute, private sportService: SportsService) { }

  ngOnInit() {
    this.sport = new Sport(undefined, undefined, undefined, undefined, undefined, undefined);
    this.route.params.subscribe(params =>
      this.sportService.getSport(params['id']).subscribe(
        (sport: Sport) => {
          if (sport) {
            this.sport = sport;
          }
        },
        (error) => {
          this.traiterErreur(error);
        }));
  }

  traiterErreur(err: HttpErrorResponse) {
    this.errorService.changeError('Technical Issue: ' + err.message);
  }

}
