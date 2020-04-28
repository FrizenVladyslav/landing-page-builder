import React, { Component } from 'react'
import classNames from 'classnames'
import { Layout } from 'antd'
import { IBlock, ISelectedElement } from 'types/Editor'
import Block from './Block'
import Sidebar from './Sidebar'

import blocks from './config'

import styles from './styles.module.scss'
import './test.css'

interface IState {
  sidebarCollapsed?: boolean
  selectedElement?: ISelectedElement
  blocks: IBlock[]
}

class Builder extends Component<{}, IState> {
  state: IState = {
    sidebarCollapsed: true,
    blocks,
  }

  changeSelectedElement = (selectedElement?: ISelectedElement) => {
    this.setState({ selectedElement, sidebarCollapsed: !this.state.sidebarCollapsed })
  }

  updateElementProps = (prop: string, value: any) => {
    const { selectedElement, blocks } = this.state
    if (!selectedElement) return

    const { props, path } = selectedElement

    blocks[path[0]].rows[path[1]].cols[path[2]].elements[path[3]].props = {
      ...props,
      [prop]: value,
    }

    this.setState({ blocks })
  }

  render() {
    const { blocks, selectedElement } = this.state

    return (
      <Layout className={classNames('landing-layout', styles.landing)}>
        <Sidebar
          collapsed={this.state.sidebarCollapsed}
          selectedElement={selectedElement}
          changeElement={this.updateElementProps}
          onClose={this.changeSelectedElement}
        />
        <Layout.Content>
          <div>
            {blocks.map(({ props, rows }, index) => (
              <Block
                key={'block' + index}
                rows={rows}
                blockIndex={index}
                onSelectElement={this.changeSelectedElement}
                {...props}
              />
            ))}
          </div>
        </Layout.Content>
      </Layout>
    )
  }
}

export default Builder
