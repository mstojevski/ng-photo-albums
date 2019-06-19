import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Photo } from "../model/Photo";

@Injectable({
  providedIn: "root"
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  private _photos = new BehaviorSubject<Photo[]>([]);
  photos$ = this._photos.asObservable();

  get photos(): Photo[] {
    return this._photos.getValue();
  }
  set photos(val: Photo[]) {
    this._photos.next(val);
  }

  getAllPhotos() {
    this.photos$ = this.http.get<Photo[]>(
      "https://jsonplaceholder.typicode.com/photos"
    );
  }

  removePhoto(photoId: number) {
    this.photos = this.photos.filter(photo => photo.id !== photoId);
    console.log("Photo is deleted");
  }
}
