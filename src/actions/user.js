export const SET_USER = 'user/setUser'

export const setUser = profile => {
  return {
    type: SET_USER,
    payload: profile
  }
}
