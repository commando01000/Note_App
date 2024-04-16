import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Notes } from 'src/app/interfaces/notes';
import { NotesService } from 'src/app/Services/Notes/notes.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  notes: Notes[] = [];
  searchKey: string = '';
  noteId: string = '';

  constructor(private _NoteService: NotesService) {}
  noteAddForm: FormGroup = new FormGroup({
    title: new FormControl(null),
    content: new FormControl(null),
  });

  noteEditForm: FormGroup = new FormGroup({
    title: new FormControl(null),
    content: new FormControl(null),
  });
  getNotes() {
    this._NoteService.getUserNotes().subscribe({
      next: (repsonse) => {
        console.log(repsonse.notes);
        this.notes = repsonse.notes;
        // console.log(this.notes[0].title);
      },
      error: (err) => {
        console.log(err);
        this.notes = [];
      },
    });
  }

  addNote(noteAddForm: FormGroup) {
    // console.log(noteAddForm.value);

    this._NoteService.addUserNote(noteAddForm.value).subscribe({
      next: (repsonse) => {
        console.log(repsonse);
        this.getNotes();
        noteAddForm.reset();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  editNote(noteEditForm: FormGroup) {
    // console.log(noteEditForm.value);

    this._NoteService
      .updateUserNote(this.noteId, noteEditForm.value)
      .subscribe({
        next: (repo) => {
          console.log(repo);
          this.getNotes();
          noteEditForm.reset();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  deleteNote() {
    this._NoteService.deleteUserNote(this.noteId).subscribe({
      next: (response) => {
        console.log(response);
        this.getNotes();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getNoteId(id: string) {
    this.noteId = id;
    console.log(this.noteId);
  }

  ngOnInit(): void {
    this.getNotes();
  }
}
