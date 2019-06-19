import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "pha-album",
  templateUrl: "./album.component.html",
  styleUrls: ["./album.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumComponent implements OnInit {
  @Input() title;
  @Input() author;
  @Input() id;
  constructor() {}

  ngOnInit() {}
}
