import React, { useState } from 'react'
import { Upload, message } from 'antd'
import { RcFile, UploadChangeParam } from 'antd/lib/upload'
import { UploadFile } from 'antd/lib/upload/interface'
import { getBase64 } from 'utils/images'
import UploadButton from './UploadButton'

import styles from './styles.module.scss'

function validateImage(file: RcFile) {
  const isJpgOrPng = ['image/jpeg', 'image/png'].includes(file.type)
  if (!isJpgOrPng) message.error('You can only upload JPG/PNG file!')

  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) message.error('Image must smaller than 2MB!')

  return isJpgOrPng && isLt2M
}

interface IProps {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  style?: object
}

const ImageUpload: React.FC<IProps> = ({ onClick, style = {} }) => {
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState<string | undefined>(undefined)

  async function handleChange(info: UploadChangeParam<UploadFile<any>>) {
    if (info.file.status === 'uploading') setLoading(true)
    if (info.file.status === 'done') {
      const image = await getBase64(info.file.originFileObj!)
      console.log(image)
      setImage(image as string)
      setLoading(false)
    }
  }

  return (
    <div onClick={onClick}>
      <Upload
        name="logo"
        listType="picture-card"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        className="landing-logo"
        showUploadList={false}
        beforeUpload={validateImage}
        onChange={handleChange}
        style={{
          padding: 0,
        }}
      >
        {image ? (
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${image})`,
              ...style,
            }}
          />
        ) : (
          <UploadButton loading={loading} />
        )}
      </Upload>
    </div>
  )
}

export default ImageUpload
