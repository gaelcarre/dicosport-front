import { Component, OnInit } from '@angular/core';
declare var _: any;
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const d = new Date(2018, 8, 31);
    const f = new Date(2018, 9, 2);

    console.log(f > d);
  }


  isSuperiorDate(start, end): boolean {
    let result = false;
    let dateDeb = null;
    let dateF = null;
    if (start !== undefined) {
        dateDeb = new Date(start.year, start.month - 1, start.day);
    }
    if (end !== undefined) {
        dateF = new Date(end.year, end.month - 1, end.day);
    }

    if (start !== undefined && end !== undefined) {
        (dateF > dateDeb)
            ? result = true
            : result = false;
    }
    return result;
}

}
