import Handler from "../interfaces/IHandler";

export default class DeleteAction implements Handler {
  private nextHandler: Handler

  setHandler(handler: Handler): Handler {
    this.nextHandler = handler

    return handler
  }

  Handler(request: string): void {
    if(request === 'delete') {
      return console.log('...deleting action')
    }
    return this.nextHandler.Handler(request)
  }
}