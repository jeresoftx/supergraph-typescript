export interface Role {
  uuid: string;
  name: string;
  description?: string;
  permissions: [string];
}
