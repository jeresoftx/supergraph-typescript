import { Role } from './Role';

export interface RoleHistory {
  uuid: string;
  role: Role;
  createdAt: string;
  userId: string;
}
