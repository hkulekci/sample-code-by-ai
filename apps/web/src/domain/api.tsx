import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { DatasetApi } from './dataset/dataset.api'

import { AreaApi } from './area/area.api'

import { EmissionApi } from './emission/emission.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Upload extends UploadApi {}
  
  export class User extends UserApi {}
  
  export class Notification extends NotificationApi {}
  
  export class Dataset extends DatasetApi {}
  
  export class Area extends AreaApi {}
  
  export class Emission extends EmissionApi {}
  
}
