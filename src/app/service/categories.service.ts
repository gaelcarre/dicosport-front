import { Injectable } from '../../../node_modules/@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { ConstantProvider } from '../const';
import { Sport } from '../pojo/Sport';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Category } from '../pojo/Category';

@Injectable()
export class CategoriesService {

  constructor(private http: HttpClient, private constant: ConstantProvider) { }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.constant.serverPath + '/public/categories');
  }

}
