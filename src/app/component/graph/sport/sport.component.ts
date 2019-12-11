import { Component, OnInit } from '@angular/core';
import * as d3 from '../../../../../bower_components/d3/d3';
import { ErrorService } from '../../../service/error.service';
import { GraphService } from '../../../service/graph.service';
declare var Alchemy: any;

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  private data: any;
  private config;

  constructor(private errorService: ErrorService, private graphService: GraphService) { }

  ngOnInit() {
    this.data = this.graphService.getGraphSports().subscribe(
      (json) => {
        this.data = json;
        console.log(this.data);
        this.config = {
          divSelector: '#alchemysport',
          dataSource: this.data,
          // forceLocked: false,
          nodeCaptionsOnByDefault: true,
          directedEdges: true,
          initialScale: 2,
          initialTranslate: [250, 150],
          nodeClick: function() {},
          nodeMouseOver: function() {},
          nodeMouseOut: function() {},
          nodeTypes: {
            'type': ['sport']
          },
          edgeTypes: {
            'type': ['SPORT_UNDER']
          },
          edgeStyle: {
            'SPORT_UNDER': {
              'width': 4,
              'color': '#F00',
              'opacity': 1
            }
          },
          nodeStyle: {
            'sport': {
              'radius': 5,
              'color': function(d) {
                return (d.getProperties().color);
              }
            }
          }
          };
        const alchemy = new Alchemy(this.config);

      },
      (error) => {
        this.errorService.changeError(error.message);
      }
    );
  }


}
