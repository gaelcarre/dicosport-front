import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import {AuthentService} from '../../service/authent.service';
import { SportsService } from '../../service/sports.service';
import { Sport } from '../../pojo/Sport';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private sports: Sport[];
  private sizeSportName = 100;

  constructor(public router: Router, private authentService: AuthentService, private sportsService: SportsService) { }

  ngOnInit() {

    if (!this.authentService.isConnected()) {
      this.router.navigate(['/forbidden']);
    }

    this.getSports();

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

  traiterErreur(err: HttpErrorResponse) {
    console.log(err);
  }

}
