import { Injectable } from '@angular/core';
import { News } from '../pojo/News';
import { ConstantProvider } from '../const';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient, private constant: ConstantProvider) { }

  public purge(): Observable<Object> {
    return this.http.delete(this.constant.serverPath + '/admin/purge');
  }

}
