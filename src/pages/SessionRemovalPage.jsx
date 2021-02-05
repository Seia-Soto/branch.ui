import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { setUser } from '../actions/user'

const SessionRemovalPage = props => {
  const dispatch = useDispatch()
  const history = useHistory()

  React.useEffect(() => {
    dispatch(setUser({
      key: undefined,
      profile: undefined
    }))

    history.push('/session')
  }, [dispatch, history])

  return null
}

export default SessionRemovalPage
