import React from 'react'
import { useObserver } from 'mobx-react'
import { PageHeader, Button } from 'antd'
import { ButtonProps } from 'antd/lib/button'
import { SaveOutlined, EyeOutlined, SettingOutlined, ClearOutlined } from '@ant-design/icons'
import { useStore } from 'stores'
import { IBlock } from 'types/Editor'

import styles from './styles.module.scss'
import { TextSettings, ListSettings } from './Settings'

interface IButton {
  text: string
  props: ButtonProps
}

const buttons: IButton[] = [
  {
    text: 'Reset',
    props: { type: 'danger', icon: <ClearOutlined /> },
  },
  {
    text: 'Page Settings',
    props: { icon: <SettingOutlined /> },
  },
  {
    text: 'Preview',
    props: { icon: <EyeOutlined /> },
  },
  {
    text: 'Save',
    props: { type: 'primary', icon: <SaveOutlined /> },
  },
]

function renderSettings(type?: IBlock['type']) {
  switch (type) {
    case 'text':
      return <TextSettings />
    case 'list':
      return <ListSettings />
    default:
      return ''
  }
}

const Header: React.FC = () => {
  const { builder } = useStore()
  const { selectedBlock } = builder
  const subTitle = selectedBlock ? `${selectedBlock.type} settings` : 'Edit landing'

  return useObserver(() => (
    <PageHeader
      className={styles.header}
      title="Rewired"
      subTitle={subTitle}
      extra={
        !builder.selectedBlock &&
        buttons.map(({ text, props }) => (
          <Button key={text} {...props}>
            {text}
          </Button>
        ))
      }
    >
      <div className="content">{renderSettings(selectedBlock?.type)}</div>
    </PageHeader>
  ))
}

export default Header
