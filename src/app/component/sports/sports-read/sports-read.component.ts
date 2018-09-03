import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../../node_modules/rxjs/Observable';
import { Sport } from '../../../pojo/Sport';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SportsService } from '../../../service/sports.service';
import { Category } from '../../../pojo/Category';
import { AuthentService } from '../../../service/authent.service';
import { ErrorService } from '../../../service/error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sports-read',
  templateUrl: './sports-read.component.html',
  styleUrls: ['./sports-read.component.css']
})
export class SportsReadComponent implements OnInit {

  private sportObservable: Observable<Sport>;
  private sport: Sport;

  constructor(private router: Router,
    private route: ActivatedRoute, private sportsService: SportsService, private auth: AuthentService,
    private errorService: ErrorService) {}

  ngOnInit() {
    this.sport = new Sport(undefined, undefined, undefined, undefined, undefined);
    this.route.params.subscribe(params =>
      this.sportObservable = this.sportsService.getSport(params['id'])
    );

    this.sportObservable
      .subscribe(
        (sport: Sport) => {
          if (sport) {
            this.sport = sport;
          }
        },
        (error) => {
          this.traiterErreur(error);
        });
  }

  traiterErreur(err: HttpErrorResponse) {
    this.errorService.changeError('Technical Issue: ' + err.message);
  }

  getStyle(c: Category): Object {
    const style: Object = {'background-color': c.color, color: this.getOppositeColor(c.color) };
    return style;
  }

  getOppositeColor(color: String): String {

    const red: string = '' + color.charAt(1) + color.charAt(2);
    const green: string = '' + color.charAt(3) + color.charAt(4);
    const blue: string = '' + color.charAt(5) + color.charAt(6);

    if ((parseInt(red, 2) * 0.299 + parseInt(green, 2) * 0.587 + parseInt(blue, 2) * 0.114) > 186) {
      return '#000000';
    } else {
      return '#ffffff';
    }
  }
}
