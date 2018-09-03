import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../../../service/error.service';
// tslint:disable:indent
@Component({
selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  private message: string;

  constructor(private service: ErrorService) { }

  ngOnInit() {
    this.service.currentMessage.subscribe(message => this.message = message);
  }

  hasError(): boolean {
    return (this.message !== '');
  }

}
