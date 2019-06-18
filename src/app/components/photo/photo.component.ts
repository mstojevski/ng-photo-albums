import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "pha-photo",
  templateUrl: "./photo.component.html",
  styleUrls: ["./photo.component.css"]
})
export class PhotoComponent implements OnInit {
  @Input() thumbnail;
  @Input() title;
  constructor() {}

  ngOnInit() {}
}
