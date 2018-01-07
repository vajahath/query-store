import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { QueryService } from '../query.service';
import { Query } from '../Query.class';

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html',
  styleUrls: ['./deployments.component.css']
})
export class DeploymentsComponent implements OnInit {
  queries: Query[];

  constructor(
    private route: ActivatedRoute,
    private queryService: QueryService,
    private location: Location
  ) {}

  ngOnInit() {}

  getQueries(): void {
    const env = this.route.snapshot.paramMap.get('env');

    this.queryService
      .getQueries()
      .subscribe(queries => (this.queries = queries));
  }
}
