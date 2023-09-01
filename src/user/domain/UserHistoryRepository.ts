import { UserHistory } from './UserHistory';

export interface UserHistoryRepository {
  userHistoryBrowse(): Promise<UserHistory[] | null>;
  userHistoryRead(uuid: string): Promise<UserHistory | null>;
  userHistoryAdd(userHistory: UserHistory): Promise<UserHistory | null>;
  userHistoryDelete(uuid: string): Promise<boolean>;
}
