import { User } from './User';

export interface UserHistory {
  uuid: string;
  user: User;
  createdAt: string;
  userId: string;
}
