import { Component, OnInit } from '@angular/core';
import { SportsService } from '../../../service/sports.service';
import { Sport } from '../../../pojo/Sport';
import { HttpErrorResponse } from '../../../../../node_modules/@angular/common/http';
import { ErrorService } from '../../../service/error.service';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.css']
})
export class SportsListComponent implements OnInit {

  private sports: Sport[];
  private searchText;

  constructor(private sportsService: SportsService, private errorService: ErrorService) { }

  ngOnInit() {
    this.getSports();
  }

  traiterErreur(err: HttpErrorResponse) {
    this.errorService.changeError('Technical Issue: ' + err.message);
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

  reset() {
    this.searchText = '';
  }

}
