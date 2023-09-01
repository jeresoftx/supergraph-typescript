import { Role } from './Role';

export interface RoleRepository {
  roleBrowse(): Promise<Role[] | null>;
  roleRead(uuid: string): Promise<Role | null>;
  roleEdit(role: Role): Promise<Role | null>;
  roleAdd(role: Role): Promise<Role | null>;
  roleDelete(uuid: string): Promise<boolean>;
}
