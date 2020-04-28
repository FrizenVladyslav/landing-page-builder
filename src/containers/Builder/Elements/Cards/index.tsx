import React from 'react'
import classNames from 'classnames'
import { ICard } from 'types/Editor'

import styles from './styles.module.scss'

interface IProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  cards: ICard[]
}

const Cards: React.FC<IProps> = ({ cards, className = '', ...rest }) => {
  return (
    <ul className={classNames('landing-cards', className, styles.cards)} {...rest}>
      {cards.map(({ icon, title, text }) => (
        <li>
          <div dangerouslySetInnerHTML={{ __html: icon }} />
          <h4>{title}</h4>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  )
}

export default Cards
