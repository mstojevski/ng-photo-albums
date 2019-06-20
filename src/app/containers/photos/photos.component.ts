import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { PhotosService } from "src/app/services/photos.service";
import { Observable } from "rxjs";
import { Photo } from "../../model/Photo";

@Component({
  selector: "pha-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotosComponent implements OnInit {
  albumPhotos$: Observable<Photo[]>;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private photoService: PhotosService
  ) {}
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("albumId");
    this.albumPhotos$ = this.photoService.getPhotosFromAlbum(id);
  }

  goBack() {
    this.location.back();
  }
  onRemove(id: number) {
    this.photoService.removePhoto(id);
    console.log("this.http.delete(URL/id)");
  }
}
