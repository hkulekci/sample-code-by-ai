

import { Dataset } from "../dataset"

import { Emission } from "../emission"

export class Area {

id: string

name: string

datasetId: string

dataset?: Dataset

dateCreated: string

dateDeleted: string

dateUpdated: string

emissions?: Emission[]

}
