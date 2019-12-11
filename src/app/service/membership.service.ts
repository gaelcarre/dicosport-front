import { Injectable } from '../../../node_modules/@angular/core';
import { ConstantProvider } from '../const';
import { Membership } from '../pojo/Membership';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class MembershipService {

  constructor(private http: HttpClient, private constant: ConstantProvider) { }

  public postMembership(membership: Membership): Observable<Membership> {
      console.log('postmember: ', membership);
    return this.http.post<Membership>(this.constant.serverPath + '/memberships', membership);
  }

  public putMembership(membership: Membership): Observable<Membership> {
    return this.http.put<Membership>(this.constant.serverPath + '/memberships/' + membership.id, membership);
  }

  public deleteMembership(membership: Membership) {
    this.http.delete(this.constant.serverPath + '/memberships/' + membership.id).subscribe(
      (res) => console.log(res)
    );
  }

  public getJson(): Observable<any> {
    return this.http.get(this.constant.serverPath + '/public/graph');
  }
}
