import React from 'react'
import classNames from 'classnames'

interface IProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  text?: string
}

const Button: React.FC<IProps> = ({ text, href, className = '' }) => {
  return (
    <a href={href} className={classNames('primary-button', className)}>
      {text}
    </a>
  )
}

export default Button
