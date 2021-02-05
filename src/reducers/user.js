import * as actions from '../actions/user'

const initialStates = {}

const reducer = (state = initialStates, action) => {
  const { type, payload } = action

  switch (type) {
    case actions.SET_PROFILE: {
      return {
        ...state,
        ...payload
      }
    }
    default:
      return state
  }
}

export default reducer
