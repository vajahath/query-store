import { Component, OnInit } from '@angular/core';
import { Query } from '../Query.class';

import { QUERIES } from '../queries.mock';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class AppViewerComponent implements OnInit {
  queries = QUERIES;
  selectedQuery: Query;

  constructor() {}
  ngOnInit() {}

  onSelect(query: Query) {
    this.selectedQuery = query;
  }
}
