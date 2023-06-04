import CreateAction from "../cases/createAction";
import UpdateAction from "../cases/updateAction";
import DeleteAction from "../cases/deleteAction";

export default class ActionChain {
  chain1: CreateAction
  chain2: DeleteAction
  chain3: UpdateAction

  constructor() {
    this.chain1 = new CreateAction()
    this.chain2 = new DeleteAction()
    this.chain3 = new UpdateAction()

    this.chain1.setHandler(this.chain2)
    this.chain2.setHandler(this.chain3)
  }
}
