import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Photo } from "../model/Photo";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class PhotosService {
  constructor(private http: HttpClient) {}
  private readonly API_URL = environment.url;
  private _photos = new BehaviorSubject<Photo[]>([]);
  photos$ = this._photos.asObservable();

  get photos(): Photo[] {
    return this._photos.getValue();
  }
  set photos(val: Photo[]) {
    this._photos.next(val);
  }

  getAllPhotos() {
    this.photos$ = this.http.get<Photo[]>(`${this.API_URL}/photos`);
  }

  removePhoto(photoId: number) {
    this.photos = this.photos.filter(photo => photo.id !== photoId);
    console.log("Photo is deleted");
  }
}
