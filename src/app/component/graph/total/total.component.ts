import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../../../service/error.service';
import * as d3 from '../../../../../bower_components/d3/d3';
import { GraphService } from '../../../service/graph.service';
declare var Alchemy: any;
@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  private data: any;

  constructor(private graphService: GraphService, private errorService: ErrorService) { }

  ngOnInit() {

    this.data = this.graphService.getGraph().subscribe(
      (json) => {
        this.data = json;
        const config = {
          divSelector: '#alchemytotal',
          dataSource: this.data,
          initialScale: 0.3,
          nodeClick: function() {
            console.log('nodeClick');
          },
          nodeMouseOver: function() {},
          nodeMouseOut: function() {},
          nodeTypes: {
            'type': ['sport', 'category']
          },
          edgeTypes: {
            'type': ['MEMBER_OF', 'CATEGORIZED_UNDER', 'SPORT_UNDER']
          },
          edgeStyle: {
            'MEMBER_OF' : {'width': 2, 'color': '#F00', 'opacity': 0.9},
            'CATEGORIZED_UNDER': {
              'width': 4,
              'color': '#FFF',
              'opacity': 0.6
            },
            'SPORT_UNDER': {
              'width': 2,
              'color': 'orange',
              'opacity': 0.6
            }
          },
          nodeStyle: {
            'category' : {
              'radius': 20,
              'overlap': 50,
              'color': function(d) {
                return (d.getProperties().color);
              }
            },
            'sport': {
              'radius': 10,
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
