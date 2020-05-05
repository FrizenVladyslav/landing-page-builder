import React from 'react'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

interface IProps {
  loading?: boolean
}

const UploadButton: React.FC<IProps> = ({ loading }) => (
  <div>
    {loading ? <LoadingOutlined /> : <PlusOutlined />}
    <div className="ant-upload-text">Upload</div>
  </div>
)

export default UploadButton
