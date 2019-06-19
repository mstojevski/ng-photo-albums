import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Photo } from "../model/Photo";
import { environment } from "../../environments/environment";
import { map, tap, switchMapTo } from "rxjs/operators";

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
    return this.http.get<Photo[]>(`${this.API_URL}/photos`);
  }

  removePhoto(photoId: number) {
    this.photos = this.photos.filter((photo: Photo) => photo.id !== photoId);
  }
  getPhotosFromAlbum(albumId: number) {
    return this.getAllPhotos().pipe(
      map((photos: Photo[]) =>
        photos.filter(photo => photo.albumId === albumId)
      ),
      tap(photos => {
        this.photos = photos;
      }),
      switchMapTo(this.photos$)
    );
  }
}
