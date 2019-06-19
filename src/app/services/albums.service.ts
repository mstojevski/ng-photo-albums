import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Album } from "../model/Album";

const API_URL = "https://jsonplaceholder.typicode.com";
@Injectable({
  providedIn: "root"
})
export class AlbumsService {
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http
      .get(`${API_URL}/albums`)
      .pipe(map((data: any) => data as Album[]));
  }
}
