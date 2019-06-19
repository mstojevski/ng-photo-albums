import { Component, OnInit } from "@angular/core";
import { AlbumComponent } from "../../components/album/album.component";
import { UserAlbumsService } from "src/app/services/user-albums.service";
import { Observable } from "rxjs";
import { UserAlbum } from "src/app/model/userAlbum";

@Component({
  selector: "pha-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.css"]
})
export class AlbumsComponent implements OnInit {
  userAlbums$: Observable<UserAlbum[]>;

  constructor(private userAlbum: UserAlbumsService) {}
  ngOnInit() {
    this.userAlbums$ = this.userAlbum.load();
  }
}
