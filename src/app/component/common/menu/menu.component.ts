import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentService } from '../../../service/authent.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public router: Router, private auth: AuthentService) { }

  ngOnInit() {
  }


}
