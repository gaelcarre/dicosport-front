import { Injectable } from '../../../node_modules/@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { ConstantProvider } from '../const';
import { Sport } from '../pojo/Sport';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class SportsService {

  constructor(private http: HttpClient, private constant: ConstantProvider) { }

  public getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>(this.constant.serverPath + '/public/sports');
  }
  public getSport(id: number): Observable<Sport> {
    return this.http.get<Sport>(this.constant.serverPath + '/public/sports/' + id);
  }

  public putSport(sport: Sport): Observable<Sport> {
    return this.http.put<Sport>(this.constant.serverPath + '/sports/' + sport.id, sport);
  }

  public postSport(sport: Sport): Observable<Sport> {
    return this.http.post<Sport>(this.constant.serverPath + '/sports', sport);
  }

}
