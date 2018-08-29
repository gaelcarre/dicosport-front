import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConstantProvider {

  public version = 'DEV'; // TEST / PROD / DEV
  public serverPath;

  constructor() {
    if (this.version === 'TEST') {

    } else if (this.version === 'PROD') {

    } else {
      this.serverPath = 'http://localhost:8095';
    }
  }

}
