import React from 'react'
import { Slider, Typography } from 'antd'

interface IProps {
  changeImageSize: (prop: string, value: object) => void
}

const ImageUploaderSettings: React.FC<IProps> = ({ changeImageSize }) => {
  return (
    <div>
      <Typography.Title level={4}>Change Image Size</Typography.Title>
      <Slider
        defaultValue={1}
        min={1}
        max={5}
        onChange={value => changeImageSize('style', { transform: `scale(1.${value})` })}
      />
    </div>
  )
}

export default ImageUploaderSettings
