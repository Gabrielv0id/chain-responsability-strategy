import Handler from "../interfaces/IHandler";

export default class UpdateAction implements Handler {
  private nextHandler: Handler

  setHandler(handler: Handler): Handler {
    this.nextHandler = handler

    return handler
  }

  Handler(request: string): void {
    if(request === 'update') {
      return console.log('...updating action')
    }
    return this.nextHandler.Handler(request)
  }
}