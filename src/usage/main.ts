import ActionChain from "./ActionChain";

const actionchain = new ActionChain()

actionchain.chain1.Handler("create") // chain 1
actionchain.chain1.Handler("delete") // chain 2
actionchain.chain1.Handler("update") // chain 3
