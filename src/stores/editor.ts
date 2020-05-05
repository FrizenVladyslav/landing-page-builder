import { observable, action, computed } from 'mobx'
import { IBlock } from 'types/Editor'

const blocks: IBlock[] = [
  {
    selector: '#text-block',
    type: 'text',
  },
  {
    selector: '#location-header',
    type: 'text',
  },
]

class BuilderStore {
  @observable blocks: IBlock[] = blocks
  @observable selectedBlockSelector?: string

  @computed
  get selectedBlock() {
    return this.blocks.find(({ selector }) => this.selectedBlockSelector === selector)
  }

  @action
  selectElement(selector: string) {
    this.selectedBlockSelector = selector
  }

  @action
  patchBlock(block: Partial<IBlock>, selector?: string) {
    const searchableSelector = selector || this.selectedBlockSelector
    const index = this.blocks.findIndex(({ selector }) => selector === searchableSelector)

    if (index !== -1) this.blocks[index] = Object.assign(this.blocks[index], block)
  }
}

export default new BuilderStore()
