import { Injectable } from '../../../node_modules/@angular/core';
import { ConstantProvider } from '../const';
import { Membership } from '../pojo/Membership';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class GraphService {

  constructor(private http: HttpClient, private constant: ConstantProvider) { }

  public getGraph(): Observable<any> {
    return this.http.get(this.constant.serverPath + '/public/graph');
  }

  public getGraphSports(): Observable<any> {
      return this.http.get(this.constant.serverPath + '/public/graph/sports');
  }

  public getGraphCategories(): Observable<any> {
      return this.http.get(this.constant.serverPath + '/public/graph/categories');
  }

  public getGraphMemberof(): Observable<any> {
    return this.http.get(this.constant.serverPath + '/public/graph/memberof');
}
}
