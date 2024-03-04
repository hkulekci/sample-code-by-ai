export namespace EmissionApplicationEvent {
  export namespace EmissionCreated {
    export const key = 'emission.application.emission.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
