import React from 'react'
import _ from 'lodash'
import { Typography, Drawer } from 'antd'
import { ISelectedElement, IElement } from 'types/Editor'
import ImageUploaderSettings from './ImageUploaderSettings'

import styles from './styles.module.scss'
import ListSettings from './ListSettings'

interface IProps {
  collapsed?: boolean
  selectedElement?: ISelectedElement
  changeElement: (prop: string, value: any) => void
  onClose: () => void
  items?: string[]
}

const Sidebar: React.FC<IProps> = ({ selectedElement, changeElement, ...rest }) => {
  function renderSelectedElement(type: IElement['type']) {
    console.log('prosp', selectedElement?.props)
    switch (type) {
      case 'image-uploader':
        return <ImageUploaderSettings changeImageSize={changeElement} />
      case 'list':
        return (
          <ListSettings
            changeItems={changeElement}
            // @ts-ignore
            items={_.cloneDeep(selectedElement?.props?.items) || []}
          />
        )
      default:
        return 'Select element'
    }
  }

  return (
    <Drawer
      className={styles.sidebar}
      title="Landing Page Settings"
      placement="left"
      closable={false}
      onClose={rest.onClose}
      visible={!rest.collapsed}
    >
      {selectedElement ? (
        renderSelectedElement(selectedElement.type)
      ) : (
        <Typography.Title level={4} type="warning" className={styles.title}>
          Select Element
        </Typography.Title>
      )}
    </Drawer>
  )
}

export default Sidebar
