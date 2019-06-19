import { Album } from "./Album";
export interface Photo {
  id: number;
  title: string;
  src: string;
  albumId: number;
}
