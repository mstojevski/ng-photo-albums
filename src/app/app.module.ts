import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AlbumsComponent } from "./containers/albums/albums.component";
import { PhotosComponent } from "./components/photos/photos.component";
import { PhotoComponent } from "./components/photo/photo.component";
import { AlbumComponent } from "./components/album/album.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    PhotosComponent,
    PhotoComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
