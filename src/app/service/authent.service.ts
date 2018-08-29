import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'angular-webstorage-service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { ConstantProvider } from '../const';
import { User } from '../pojo/User';

@Injectable()
export class AuthentService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService,
  private http: HttpClient, private constant: ConstantProvider) { }

  /**
   * Recupere les identifiants sous la forme login:password depuis le localStorage
   * Represente un 'token'
   */
  public getToken(): string {
    return this.storage.get('dicosport-token');
  }

  /**
   * Enregistre le token dans le localStorage
   * Represente un 'token'
   * @param token
   */
  public setToken(token: string): void {
    this.storage.set('dicosport-token', token);
  }

  /**
   * Supprime le token présent dans le localStorage
   */
  public deleteToken(): void {
    this.storage.remove('dicosport-user');
    this.storage.remove('dicosport-token');
  }

  public setUser(user: User): void {
    this.storage.set('dicosport-user', user);
  }

  public isConnected(): boolean {
    return (this.storage.get('dicosport-token') != null);
  }

  public connexion(): Observable<User> {
    return this.http.get<User>(this.constant.serverPath + '/admin' );
  }

}
