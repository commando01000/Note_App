import { Pipe, PipeTransform } from '@angular/core';
import { Notes } from '../interfaces/notes';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(Notes: Notes[], searchKey: string): Notes[] {
    if (!Notes || !searchKey) {
      return Notes;
    }
    return Notes.filter((note) =>
      note.title.toLowerCase().includes(searchKey.toLowerCase())
    );
  }
}
