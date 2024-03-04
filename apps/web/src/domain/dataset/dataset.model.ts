

import { User } from "../user"

import { Area } from "../area"

export class Dataset {

id: string

name: string

description?: string

userId: string

user?: User

dateCreated: string

dateDeleted: string

dateUpdated: string

areas?: Area[]

}
