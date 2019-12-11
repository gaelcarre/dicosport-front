import { Component, OnInit } from '@angular/core';
import { SuccessService } from '../../../service/success.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  private message: string;

  constructor(private service: SuccessService) { this.message = ''; }

  ngOnInit() {
    this.message = '';
    this.service.currentMessage.subscribe(message => this.message = message);
  }

  hasSuccess(): boolean {
    return (this.message !== '');
  }

  closeSuccess() {
    this.message = '';
  }

}
