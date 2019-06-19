import { User } from "../model/User";

export interface UserAlbum {
  title: string;
  id: number;
  user: User;
}
