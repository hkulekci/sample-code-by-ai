export namespace AreaApplicationEvent {
  export namespace AreaCreated {
    export const key = 'area.application.area.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
