import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlbumsComponent } from "./containers/albums/albums.component";
import { PhotosComponent } from "./components/photos/photos.component";

const routes: Routes = [
  { path: "", component: AlbumsComponent },
  { path: "album/:photoId", component: PhotosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
