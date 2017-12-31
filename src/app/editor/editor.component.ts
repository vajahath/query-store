import { Component, OnInit, Input } from '@angular/core';
import { Query } from '../Query.class';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class AppEditorComponent implements OnInit {
  @Input() selectedQuery: Query;
  displayEditorModal = true;

  query: Query = {
    id: 8,
    created_by: 'ma0',
    query: 'some query'
  };
  constructor() {}
  ngOnInit() {}
}
