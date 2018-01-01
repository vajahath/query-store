import { Component, OnInit } from '@angular/core';
import { Query } from '../Query.class';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class AppCreateComponent implements OnInit {
  title = '';
  query = '';
  finished: boolean;

  submissionInProgress: boolean;

  submitQuery() {
    if (!this.title.length || !this.query.length) {
      return alert('please fill all fields');
    }
    if (this.submissionInProgress) {
      return;
    }
    this.submissionInProgress = true;
    setTimeout(() => {
      console.log('updated');
      this.submissionInProgress = false;
      // reset
      this.title = this.query = '';
      this.finished = false;
    }, 1000);
  }
  constructor() {}
  ngOnInit() {}
}
