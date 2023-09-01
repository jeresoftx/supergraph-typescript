interface emailRegister {
  email: string;
  main: boolean;
}

interface phoneRegister {
  phone: string;
  main: boolean;
}

export interface User {
  uuid: string;
  name: string;
  lastName: string;
  fullName: string;
  username: string;
  emails: [emailRegister];
  phones: [phoneRegister];
  permissions: [string];
  roles: [string];
  lastConnected: string;
}
