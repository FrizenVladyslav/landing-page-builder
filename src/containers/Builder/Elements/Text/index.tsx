import React from 'react'
// @ts-ignore
import DanteEditor from 'Dante2'
// @ts-ignore
import { DanteTooltipConfig } from 'Dante2/package/es/components/popovers/toolTip.js'

const Editor: React.FC<object> = props => {
  return (
    <DanteEditor
      continuousBlocks={['header-one']}
      className="landing-text"
      tooltips={[DanteTooltipConfig()]}
      {...props}
    />
  )
}

export default Editor
