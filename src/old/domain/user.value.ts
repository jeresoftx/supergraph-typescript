import { v4 as uuid } from 'uuid';

import { RoleEntity } from './entities/role.entity';
import { UserEntity } from './entities/user.entity';

export class UserValue implements UserEntity {
  uuid: string;
  name: string;
  lastName: string;
  fullName: string;
  username: string;
  email: string;
  phone: string;
  roles: [RoleEntity];
  password: string;
  lastConnected: string;

  constructor({
    uuid,
    name,
    lastName,
    fullName,
    username,
    email,
    phone,
    roles,
    password,
    lastConnected,
  }: {
    uuid?: string;
    name: string;
    lastName: string;
    fullName: string;
    username: string;
    email: string;
    phone: string;
    roles: [RoleEntity];
    password: string;
    lastConnected: string;
  }) {
    this.uuid = uuid();
    this.name = name;
    this.lastName = lastName;
    this.fullName = fullName;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.roles = roles;
    this.password = password;
    this.lastConnected = lastConnected;
  }
}
