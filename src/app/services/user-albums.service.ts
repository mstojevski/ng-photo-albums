import { Injectable } from "@angular/core";
import { AlbumsService } from "./albums.service";
import { UsersService } from "./users.service";
import { map } from "rxjs/operators";
import { zip } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserAlbumsService {
  constructor(
    private albumsService: AlbumsService,
    private usersService: UsersService
  ) {}

  load() {
    const albums$ = this.albumsService.getAlbums();
    const users$ = this.usersService.getAllUsers().pipe(
      map(users =>
        users.reduce((table, user) => {
          table[user.id] = user;
          return table;
        }, {})
      )
    );

    return zip(users$, albums$).pipe(
      map(([usersTable, albums]) =>
        albums.map(album => ({
          title: album.title,
          id: album.id,
          user: usersTable[album.userId]
        }))
      )
    );
  }
}
