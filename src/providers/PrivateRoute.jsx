import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component = null, fallback = '/session', ...rest }) => {
  const user = useSelector(states => states.user)
  const userExists =
    (user) &&
    (user.key) &&
    (user.profile) &&
    (user.profile.username)

  return (
    <Route
      {...rest}
      render={props => {
        if (userExists) {
          return <Component {...props} />
        } else {
          return <Redirect to={fallback} />
        }
      }}
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
  fallback: PropTypes.string
}

export default PrivateRoute
