import * as React from 'react'
import { Route, Redirect, RouteProps } from 'react-router'

interface IProps {
  roles: string[]
  message?: string
  redirectTo?: string | object
  allow?: boolean
}

export const PrivateRoute = (
  props: RouteProps & IProps
): React.ReactElement => {
  if (!props.allow) {
    alert(props.message ? props.message : `You have not access to this page`)
  }

  return props.allow ? (
    <Route {...props} />
  ) : (
    <Redirect to={props.redirectTo ? props.redirectTo : '/'} />
  )
}

export default PrivateRoute
