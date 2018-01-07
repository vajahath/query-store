import { Component, OnInit } from '@angular/core';

import { Query } from '../Query.class';
import { EditorComponentResponse } from '../editor/editor.component';

import { QUERIES } from '../queries.mock';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class AppViewerComponent implements OnInit {
  queries = QUERIES;

  selectedQuery: Query;
  selectedQueryCopy: Query;
  selectedQueryIndex: number;

  constructor() {}
  ngOnInit() {}

  onEditClick(query: Query, index: number) {
    this.selectedQuery = query;
    this.selectedQueryCopy = Object.assign({}, this.selectedQuery);
    this.selectedQueryIndex = index;
  }

  onEditedResponse(resp: EditorComponentResponse) {
    if (resp.success) {
      delete resp.success; // delete the resp status

      // update queries
      this.queries[this.selectedQueryIndex] = resp;
      console.log(this.queries);
    }
  }

  updateCheckBox(index: number, qId: number, property: string, value: boolean) {
    if (this.queries[index][`${property}InProgress`]) {
      return;
    }
    this.queries[index][`${property}InProgress`] = true;
    console.log(
      `pos ${index} with id ${qId} changed value of prop ${property} to ${value}`
    );
    setTimeout(() => {
      this.queries[index][`${property}InProgress`] = false;
    }, 5000);
  }

  archive(index: number, qId: number) {
    if (this.queries[index][`archiveInProgress`]) {
      return;
    }
    this.queries[index][`archiveInProgress`] = true;

    console.log(`pos ${index} with id ${qId} has archived`);
    setTimeout(() => {
      this.queries[index][`archive`] = true;
      this.queries[index][`archiveInProgress`] = false;
    }, 2000);
  }
  restore(index: number, qId: number) {
    if (this.queries[index][`archiveInProgress`]) {
      return;
    }
    this.queries[index][`archiveInProgress`] = true;

    console.log(`pos ${index} with id ${qId} has restored`);
    setTimeout(() => {
      this.queries[index][`archive`] = false;
      this.queries[index][`archiveInProgress`] = false;
    }, 2000);
  }
}
