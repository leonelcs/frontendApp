import { Component, Input } from '@angular/core';
import { Note } from './model/note';

@Component({
  selector: 'note-detail',
  template: `
    <div *ngIf="note">
      <h2>{{note.comment}} details!</h2>
      <div>
        <label>id: </label>{{note.id}}
      </div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="note.comment" placeholder="comment"/>
      </div>
    </div>
  `
})
export class NoteDetailComponent {
  @Input() note: Note;
}
