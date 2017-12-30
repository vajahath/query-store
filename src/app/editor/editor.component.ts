import { Component, OnInit } from '@angular/core';
import { Query } from '../Query.class';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class AppEditorComponent implements OnInit {
  query: Query = {
    id: 1,
    created_by: 'me',
    query: 'some query'
  };

  constructor() {}
  ngOnInit() {}
}
