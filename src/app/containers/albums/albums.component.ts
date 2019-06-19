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
  searchTerm: string;
  breakpoint: number;

  constructor(private userAlbum: UserAlbumsService) {}
  ngOnInit() {
    // Grid responsive
    this.breakpoint = window.innerWidth <= 768 ? 1 : 3;
    this.userAlbums$ = this.userAlbum.load();
  }
  // onResize for responsive grid
  onResize(event) {
    this.breakpoint = event.target.innerWidth <= 768 ? 1 : 3;
  }
}
