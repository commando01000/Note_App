import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private _http: HttpClient) { }

  getUserNotes(): Observable<any> {
    return this._http.get('https://note-sigma-black.vercel.app/api/v1/notes');
  }
  addUserNote(form: FormGroup): Observable<any> {
    return this._http.post('https://note-sigma-black.vercel.app/api/v1/notes', form);
  }
  deleteUserNote(id: any): Observable<any> {
    return this._http.delete(`https://note-sigma-black.vercel.app/api/v1/notes/${id}`);
  }
  updateUserNote(id: any, form: FormGroup): Observable<any> {
    return this._http.put(`https://note-sigma-black.vercel.app/api/v1/notes/${id}`, form);
  }
}
