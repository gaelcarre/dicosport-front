import { Component, OnInit } from '@angular/core';
import * as d3 from '../../../../../bower_components/d3/d3';
import { ErrorService } from '../../../service/error.service';
import { GraphService } from '../../../service/graph.service';
declare var Alchemy: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private data: any;
  private config;

  constructor(private errorService: ErrorService, private graphService: GraphService) { }

  ngOnInit() {
    this.data = this.graphService.getGraphCategories().subscribe(
      (json) => {
        this.data = json;
        console.log(this.data);
        this.config = {
          divSelector: '#alchemycategories',
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
            'type': ['category']
          },
          edgeTypes: {
            'type': ['CATEGORIZED_UNDER']
          },
          edgeStyle: {
            'CATEGORIZED_UNDER': {
              'width': 3,
              'color': '#FFF',
              'opacity': 0.8
            }
          },
          nodeStyle: {
            'category': {
              'radius': 10,
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
