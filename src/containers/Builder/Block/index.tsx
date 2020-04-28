import React from 'react'
import classNames from 'classnames'
import { Col, Row } from 'antd'
import { RowProps } from 'antd/lib/row'
import { IRow, IElement, ISelectedElement, ICard } from 'types/Editor'
import { Text, ImageUpload, Button, List } from '../Elements'

import styles from './styles.module.scss'
import Cards from '../Elements/Cards'

interface IProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  rows: IRow[]
  blockIndex: number
  onSelectElement: (selectedElement: ISelectedElement) => void
}

const Block: React.FC<IProps> = ({
  children,
  rows,
  className = '',
  onSelectElement,
  blockIndex,
  ...rest
}) => {
  function selectElement(options: ISelectedElement) {
    return () => onSelectElement(options)
  }

  function renderElement(element: IElement, path: number[]) {
    const { props, type } = element
    const params = { type, path, props }

    switch (type) {
      case 'image-uploader':
        return <ImageUpload {...props} onClick={selectElement(params)} />
      case 'text':
        return <Text {...props} />
      case 'button':
        return <Button {...props} />
      case 'list':
        return <List {...(props as { items: string[] })} onClick={selectElement(params)} />
      case 'cards':
        return <Cards {...(props as { cards: ICard[] })} />
    }
  }

  return (
    <div className={classNames(['landing-block', styles.block, className])} {...rest}>
      {rows.map(({ cols, props: { className = '', ...rest } }, rowIndex) => (
        <Row
          key={'row' + rowIndex}
          className={classNames('landing-row', styles.row, className)}
          {...rest}
        >
          {cols.map(({ elements, props }, colIndex) => (
            <Col key={'col' + colIndex} {...props}>
              {elements.map((element, elementIndex) =>
                renderElement(element, [blockIndex, rowIndex, colIndex, elementIndex])
              )}
            </Col>
          ))}
        </Row>
      ))}
    </div>
  )
}

export default Block
