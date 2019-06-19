import { Album } from "../model/Album";
export interface User {
  id: number;
  title: string;
  albums: Album[];
}
