import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of as observableOf } from 'rxjs/observable/of';

import { Query } from './Query.class';
import { QUERIES } from './queries.mock';

@Injectable()
export class QueryService {
  constructor() {}

  getQueries(): Observable<Query[]> {
    return observableOf(QUERIES);
  }
}
