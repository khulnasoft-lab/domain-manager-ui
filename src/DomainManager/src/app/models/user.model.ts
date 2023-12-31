import { BaseModel } from './base.model';

export class UserHistory {
  username: string;
  is_admin: boolean;
  status_code: number;
  path: string;
  method: string;
  args: any;
  json: any;
  created: Date;
  error: string;
  application_name?: string;
  domain_name?: string;
  template_name?: string;
}

export class UserModel extends BaseModel {
  // Generated by frontend
  APIKey: string;
  Email: string;
  History: Array<UserHistory>;
  UsernameLowerCase: string;

  // API
  Attributes: [];
  Enabled: boolean;
  Groups: [];
  HashedAPI: string;
  UserCreateDate: Date;
  UserLastModifiedDate: Date;
  UserStatus: string;
  Username: string;
}
