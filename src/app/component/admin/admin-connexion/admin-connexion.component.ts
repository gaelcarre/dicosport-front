import { Component, OnInit } from '@angular/core';

import {AuthentService} from '../../../service/authent.service';
import { User } from '../../../pojo/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-connexion',
  templateUrl: './admin-connexion.component.html',
  styleUrls: ['./admin-connexion.component.css']
})
export class AdminConnexionComponent implements OnInit {

  public login = '';
  public pwd = '';
  public token;

  constructor(public router: Router, private auth: AuthentService) { }

  ngOnInit() {
  }

  connexion() {
      this.auth.setToken(btoa(this.login + ':' + this.pwd));
      this.auth.connexion().subscribe(
        (util: User) => {
          console.log(util);
          this.auth.setUser(<User>util);
          this.router.navigate(['/home']);
        },
        (error) => {
          this.auth.deleteToken();
          console.log(error);
        }
      );
    }

}
