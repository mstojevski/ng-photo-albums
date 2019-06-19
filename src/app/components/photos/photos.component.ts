import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "pha-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"]
})
export class PhotosComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  goBack() {
    this.location.back();
  }
  onRemove(event) {
    console.log(event);
    console.log("this.http.delete(URL/id)");
  }
}
