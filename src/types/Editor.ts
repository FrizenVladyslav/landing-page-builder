import { ColProps } from 'antd/lib/col'
import { RowProps } from 'antd/lib/row'

export interface IElement {
  type: 'image-uploader' | 'text' | 'button' | 'list' | 'cards'
  props?: object
}

export interface ICol {
  elements: IElement[]
  props: ColProps
}

export interface IRow {
  cols: ICol[]
  props: RowProps
}

export interface IBlock {
  selector: string
  type: 'image-uploader' | 'text' | 'button' | 'list' | 'cards'
  props?: object
}

export interface ISelectedElement extends IElement {
  path: number[]
}

export interface ICard {
  icon: string
  title: string
  text: string
}
