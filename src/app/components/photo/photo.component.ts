import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from "@angular/core";

@Component({
  selector: "pha-photo",
  templateUrl: "./photo.component.html",
  styleUrls: ["./photo.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent implements OnInit {
  @Input() thumbnail: string;
  @Input() title: string;
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}
}
