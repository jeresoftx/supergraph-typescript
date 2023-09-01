import { User } from './User';
import { UserHistory } from './UserHistory';

export interface UserRepository {
  userBrowse(): Promise<User[] | null>;
  userRead(uuid: string): Promise<User | null>;
  userEdit(user: User): Promise<User | null>;
  userAdd(user: User): Promise<User | null>;
  userDelete(uuid: string): Promise<boolean>;
  userRecovery(userHistory: UserHistory): Promise<User | null>;
}
