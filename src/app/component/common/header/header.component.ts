import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../../../service/authent.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, private auth: AuthentService) { }

  ngOnInit() {
    console.log(this.auth.isConnected());
  }

  logout() {
    this.auth.deleteToken();
    this.router.navigate(['/news']);
  }

}
