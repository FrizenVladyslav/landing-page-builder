import React from 'react'
import { Form, Input, Typography, Button } from 'antd'
import { PlusCircleFilled, DeleteFilled, InfoCircleOutlined } from '@ant-design/icons'
import { FormProps } from 'antd/lib/form'

import styles from './styles.module.scss'

interface IProps extends FormProps {
  items: string[]
  changeItems: (prop: string, value: object) => void
}

const ListSettings: React.FC<IProps> = ({ items, changeItems, ...rest }) => {
  function addItem() {
    return changeItems('items', [...items, ''])
  }

  function changeItem(index: number) {
    return ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      items[index] = target.value
      changeItems('items', items)
    }
  }

  function deleteItem(index: number) {
    const newItems = items.filter((_i, inx) => inx !== index)
    return () => changeItems('items', newItems)
  }

  return (
    <div>
      <Typography.Text className={styles.title} strong>
        List editing:
      </Typography.Text>
      <Form {...rest}>
        {items.map((item, index) => (
          <Form.Item
            className={styles.formItem}
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
            {console.log(item)}
            <Input
              placeholder="Text"
              value={String(item)}
              onChange={changeItem(index)}
              suffix={
                <DeleteFilled onClick={deleteItem(index)} style={{ color: 'rgba(0,0,0,.45)' }} />
              }
            />
          </Form.Item>
        ))}
        <Button onClick={addItem} type="primary" icon={<PlusCircleFilled />}>
          Add filed
        </Button>
      </Form>
    </div>
  )
}

export default ListSettings
