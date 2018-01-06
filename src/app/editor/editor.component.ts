import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';

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

  updateInProgress: boolean;

  constructor() {}
  ngOnInit() {}

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (
      this.selectedQuery &&
      event.key === 'Escape' &&
      !this.updateInProgress
    ) {
      this.cancel();
    }
  }

  // update operation
  updateQuery() {
    this.updateInProgress = true;
    setTimeout(() => {
      // http req - on success
      this.edited.emit(
        Object.assign(
          {
            success: true
          },
          this.selectedQuery
        )
      );
      this.updateInProgress = false;
      this.selectedQuery = null;
    }, 2000);
  }
  // cancel
  cancel() {
    if (!this.updateInProgress) {
      this.selectedQuery = null;
    }
  }
}
