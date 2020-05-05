import { createContext, useContext } from 'react'
import { configure, observable } from 'mobx'
import remotedev from 'mobx-remotedev'
import editorStore from './editor'

configure({ enforceActions: 'observed' })

@remotedev({ global: true })
class RootStore {
  @observable builder = editorStore
}

const store = new RootStore()

export const StoreContext = createContext<RootStore>(store)

export const useStore = (): RootStore => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store
}

export default store
