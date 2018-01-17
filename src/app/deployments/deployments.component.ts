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
  env: string;
  deployInProgress: boolean;

  constructor(
    private route: ActivatedRoute,
    private queryService: QueryService,
    private location: Location
  ) {
    this.deployInProgress = false;
    this.env = this.route.snapshot.paramMap.get('env');
  }

  ngOnInit() {
    this.getQueries();
  }

  getQueries(): void {
    console.log(`getting queries on env ${this.env}`);

    this.queryService
      .getQueries()
      .subscribe(queries => (this.queries = queries));
  }

  deploy() {
    this.deployInProgress = true;
    setTimeout(() => {
      console.log('deploy clicked');
      this.deployInProgress = false;
      this.getQueries();
    }, 1000);
  }
}
