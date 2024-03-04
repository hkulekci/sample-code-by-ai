export namespace DatasetApplicationEvent {
  export namespace DatasetCreated {
    export const key = 'dataset.application.dataset.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
