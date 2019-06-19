import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Album } from "../model/Album";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class AlbumsService {
  private readonly API_URL = environment.url;
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.API_URL}/albums`);
  }
}
