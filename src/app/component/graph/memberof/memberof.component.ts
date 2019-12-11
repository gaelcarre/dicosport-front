import { Component, OnInit } from '@angular/core';
import { MembershipService } from '../../../service/membership.service';
import * as d3 from '../../../../../bower_components/d3/d3';
import { ErrorService } from '../../../service/error.service';
declare var Alchemy: any;


@Component({
  selector: 'app-memberof',
  templateUrl: './memberof.component.html',
  styleUrls: ['./memberof.component.css']
})
export class MemberofComponent implements OnInit {

  private data: any;

  constructor(private membershipService: MembershipService, private errorService: ErrorService) { }

  ngOnInit() {

    this.data = this.membershipService.getJson().subscribe(
      (json) => {
        this.data = json;
        console.log(this.data);
        const config = {
          dataSource: this.data,
          nodeClick: function() {},
          nodeMouseOver: function() {},
          nodeMouseOut: function() {},
          nodeTypes: {
            'type': ['sport', 'category']
          },
          edgeTypes: {
            'type': ['MEMBER_OF', 'CATEGORIZED_UNDER', 'SPORT_UNDER']
          },
          edgeStyle: {
            'MEMBER_OF' : {'width': 1, 'color': '#F00', 'opacity': 0.9},
            'CATEGORIZED_UNDER': {
              'width': 3,
              'color': '#FFF',
              'opacity': 0.6
            },
            'SPORT_UNDER': {
              'width': 2,
              'color': '#00F',
              'opacity': 0.6
            }
          },
          nodeStyle: {
            'category' : {
              'radius': 10,
              'color': function(d) {
                return (d.getProperties().color);
              }
            },
            'sport': {
              'radius': 5,
              'color': function(d) {
                return (d.getProperties().color);
              }
            }
          }
          };
        const alchemy = new Alchemy(config);

      },
      (error) => {
        this.errorService.changeError(error.message);
      }
    );
  }

}
