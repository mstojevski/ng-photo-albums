import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { PhotosService } from "src/app/services/photos.service";

@Component({
  selector: "pha-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"]
})
export class PhotosComponent implements OnInit {
  albumPhotos$;
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
  onRemove(id) {
    this.photoService.removePhoto(id);
    console.log("this.http.delete(URL/id)");
  }
}
