import { Permission } from './Permission';

export interface PermissionHistory {
  uuid: string;
  permission: Permission;
  createdAt: string;
  userId: string;
}
