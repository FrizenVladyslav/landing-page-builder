import React from 'react'
import classNames from 'classnames'

interface IProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  items: string[]
}

const List: React.FC<IProps> = ({ items, className = '', ...rest }) => {
  return (
    <ul className={classNames('landing-list', className)} {...rest}>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default List
