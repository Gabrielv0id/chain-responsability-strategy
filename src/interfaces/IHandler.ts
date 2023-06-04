export default interface Handler {
  setHandler(handler: Handler): Handler
  Handler(request: string): void
}