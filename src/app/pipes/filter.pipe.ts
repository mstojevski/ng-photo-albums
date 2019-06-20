import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(arr, searchTerm: string): any[] {
    if (!arr || !searchTerm) {
      return arr;
    }

    return arr.filter(
      (item: any) =>
        item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}
