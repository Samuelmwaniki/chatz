import { Group } from "../group/Group";
import { Notification } from "../notification/Notification";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  sender: string | null;
  isRead: boolean | null;
  group?: Group | null;
  notifications?: Array<Notification>;
};
