import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Query } from '../Query.class';

export class EditorComponentResponse extends Query {
  success: boolean;
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class AppEditorComponent implements OnInit {
  @Input() selectedQuery: Query;
  @Output() edited = new EventEmitter<EditorComponentResponse>();

  constructor() {}
  ngOnInit() {}

  // update operation
  updateQuery() {
    console.log('updated data', this.selectedQuery);
    // http req - on success
    this.edited.emit(
      Object.assign(
        {
          success: true
        },
        this.selectedQuery
      )
    );
    this.selectedQuery = null;
  }
}
