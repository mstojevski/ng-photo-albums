import { Pipe, PipeTransform } from "@angular/core";
import { Album } from "../model/Album";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(albums$, searchTerm: string): Observable<Album[]> {
    if (!albums$ || !searchTerm) {
      return albums$;
    }

    return albums$.pipe(
      filter(
        (album: Album) =>
          album.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      )
    );
  }
}
