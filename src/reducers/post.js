import * as actions from '../actions/post'

const initialStates = {}

const reducer = (state = initialStates, action) => {
  const { type, payload } = action

  switch (type) {
    case actions.SET_POST: {
      const postIds = Object.keys(state)
      let randomId = Math.round(Math.random() * postIds.length)

      if (postIds < 25) {
        randomId = -1
      }

      payload.createdAt = Date.now()

      return {
        ...state,
        [randomId]: undefined,
        [payload.id]: payload
      }
    }
    default:
      return state
  }
}

export default reducer
