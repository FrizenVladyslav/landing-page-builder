import React from 'react'
import { Typography, Form, Button, Input } from 'antd'
import { PlusCircleFilled, DeleteFilled } from '@ant-design/icons'

const items = ['test']

const ListSettings = () => {
  return (
    <div>
      <Typography.Text strong>List editing:</Typography.Text>
      <Form>
        {items.map((item, index) => (
          <Form.Item
            key={`field-${index}`}
            name={`field-${index}`}
            label={`${index}`}
            rules={[
              {
                required: true,
                message: 'Should be filled!',
              },
            ]}
          >
            <Input placeholder="Text" value={String(item)} suffix={<DeleteFilled />} />
          </Form.Item>
        ))}
        <Button type="primary" icon={<PlusCircleFilled />}>
          Add filed
        </Button>
      </Form>
    </div>
  )
}

export default ListSettings
