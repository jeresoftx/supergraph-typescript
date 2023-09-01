import { Permission } from './Permission';

export interface PermissionRepository {
  permissionBrowse(): Promise<Permission[] | null>;
  permissionRead(uuid: string): Promise<Permission | null>;
  permissionEdit(permission: Permission): Promise<Permission | null>;
  permissionAdd(permission: Permission): Promise<Permission | null>;
  permissionDelete(uuid: string): Promise<boolean>;
  permissionBrowseHistory(): Promise<Permission[] | null>;
  permissionRecoveryHistory(): Promise<Permission[] | null>;
}
