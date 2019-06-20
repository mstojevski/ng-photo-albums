import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "pha-album",
  templateUrl: "./album.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumComponent implements OnInit {
  @Input() title: string;
  @Input() author: string;
  @Input() id: number;
  constructor() {}

  ngOnInit() {}
}
