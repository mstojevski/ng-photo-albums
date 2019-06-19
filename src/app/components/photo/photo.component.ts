import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "pha-photo",
  templateUrl: "./photo.component.html",
  styleUrls: ["./photo.component.css"]
})
export class PhotoComponent implements OnInit {
  @Input() thumbnail;
  @Input() title;
  @Output() remove = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
