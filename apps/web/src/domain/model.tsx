import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Dataset as DatasetModel } from './dataset/dataset.model'

import { Area as AreaModel } from './area/area.model'

import { Emission as EmissionModel } from './emission/emission.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}
  
  export class User extends UserModel {}
  
  export class Notification extends NotificationModel {}
  
  export class Dataset extends DatasetModel {}
  
  export class Area extends AreaModel {}
  
  export class Emission extends EmissionModel {}
  
}
