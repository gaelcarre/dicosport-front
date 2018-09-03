import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../../../node_modules/rxjs/Observable';
import { Sport } from '../../../pojo/Sport';
import { Router, ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { SportsService } from '../../../service/sports.service';
import { Category } from '../../../pojo/Category';
import { CategoriesService } from '../../../service/categories.service';
import { Membership } from '../../../pojo/Membership';
import { MembershipService } from '../../../service/membership.service';
import { ErrorService } from '../../../service/error.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sports-edit',
  templateUrl: './sports-edit.component.html',
  styleUrls: ['./sports-edit.component.css']
})
export class SportsEditComponent implements OnInit {

  private sportObservable: Observable<Sport>;
  private sport: Sport;
  private sportCategories: Category[];
  private categories: Category[];
  private edit: boolean;
  config = {
    displayKey: 'name',
    search: true
  };

  constructor(private router: Router,
    private route: ActivatedRoute, private sportsService: SportsService, private categoriesService: CategoriesService,
    private membershipService: MembershipService, private errorService: ErrorService) {}

  ngOnInit() {
    console.log(this.route);
    this.edit = this.route.snapshot.data['edit'];


    this.sport = new Sport(undefined, undefined, undefined, undefined, undefined);
    this.route.params.subscribe(params =>
      this.sportObservable = this.sportsService.getSport(params['id'])
    );

    if (this.edit) {
      this.getSports();
    }

    this.categoriesService.getCategories().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      }
    );
  }

  traiterErreur(err: HttpErrorResponse) {
    this.errorService.changeError('Technical Issue: ' + err.message);
  }

  getSports() {
    this.sportObservable
      .subscribe(
        (sport: Sport) => {
          if (sport) {
            // console.log(sport);
            this.sport = sport;
            this.sportCategories = this.getCategories(sport);
          }
        },
        (error) => {
          this.traiterErreur(error);
        });
  }

  editSport() {
    const oldCategories: Membership[] = this.sport.categories;
/*     console.log('old:', oldCategories);
    console.log('sportCate', this.sportCategories); */
    this.sport.categories = [];

    for (const c of this.sportCategories) {
      let membership: Membership = this.getMembershipForCategory(c, oldCategories);

      if (membership == null) {
        // console.log('1', this.sport);
        const newSport: Sport = new Sport(this.sport.id, this.sport.name, this.sport.description, null, this.sport.image);
        membership = new Membership(undefined, newSport, c);
      }
      this.sport.categories.push(membership);
    }

    this.processDelete(oldCategories);

    if (this.edit) {
      console.log(this.sport);
      this.sportsService.putSport(this.sport).subscribe(
        (sport: Sport) => {
          this.router.navigate(['sports/' + sport.id]);
        },
        (error) => {
          this.traiterErreur(error);
        });
    } else {
      this.sportsService.postSport(this.sport).subscribe(
        (sport: Sport) => {
          this.router.navigate(['sports/' + sport.id]);
        },
        (error) => {
          this.traiterErreur(error);
        });
    }

  }

  processDelete(oldCategories: Membership[]) {
    if (oldCategories != null) {
      for (const member of oldCategories) {
        if (!this.actualSportContains(member)) {
          this.membershipService.deleteMembership(member);
        }
      }
    }
  }

  actualSportContains(membership: Membership): boolean {
    // console.log('actualsportcontains');
    for (const m of this.sport.categories) {
      // console.log('vs: ', m.id, membership.id);
      if (m.id === membership.id) {
        return true;
      }
    }

    return false;
  }

  getMembershipForCategory(category: Category, oldCategories: Membership[]): Membership {

    if (oldCategories === null || oldCategories === undefined) {
      return null;
    }

    for (const m of oldCategories) {
      // console.log('gmfc: ', category.name, m.category.name);
      if (category.name === m.category.name) {
        return m;
      }
    }

    return null;
  }

  getCategories(sport: Sport): Category[] {
    const cs: Category[] = [];
    if (this.sport.categories != null) {
      for ( const r of sport.categories) {
        cs.push(r.category);
      }
    }

    return cs;
  }

}
