import Handler from "../interfaces/IHandler";

export default class CreateAction implements Handler {
  private nextHandler: Handler

  setHandler(handler: Handler): Handler {
    this.nextHandler = handler

    return handler
  }

  Handler(request: string): void {
    if(request === 'create') {
      return console.log('...creating action')
    }
    return this.nextHandler.Handler(request)
  }
}