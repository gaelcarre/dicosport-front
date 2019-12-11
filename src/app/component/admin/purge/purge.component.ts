import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../../../service/authent.service';
import { Router } from '@angular/router';
import { AdminService } from '../../../service/admin.service';
import { ErrorService } from '../../../service/error.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SuccessService } from '../../../service/success.service';

@Component({
  selector: 'app-purge',
  templateUrl: './purge.component.html',
  styleUrls: ['./purge.component.css']
})
export class PurgeComponent implements OnInit {

  private onPurge: Boolean = false;

  constructor(private authentService: AuthentService, private successService: SuccessService,
    private errorService: ErrorService, private router: Router, private adminService: AdminService) { }

  ngOnInit() {

    if (!this.authentService.isConnected()) {
      this.router.navigate(['/forbidden']);
    }
  }

  purge() {
    this.onPurge = true;
    this.adminService.purge().subscribe(
      (res) => {
        this.onPurge = false;
        this.successService.changeSuccess(res.toString());
      },
      (error) => {
        this.onPurge = false;
      }
    );
  }

  traiterErreur(err: HttpErrorResponse) {
    this.errorService.changeError(err.message);
  }

}
