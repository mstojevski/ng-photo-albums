import { Pipe, PipeTransform } from "@angular/core";
import { Album } from "../model/Album";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(array, searchTerm: string): any[] {
    if (!array || !searchTerm) {
      return array;
    }

    return array.filter(
      (item: any) =>
        item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}
