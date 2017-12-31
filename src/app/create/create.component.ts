import { Component, OnInit } from '@angular/core';
import { Query } from '../Query.class';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class AppCreateComponent implements OnInit {
  query: Query = {
    id: 1,
    created_by: 'me',
    query: 'some query'
  };

  constructor() {}
  ngOnInit() {}
}
