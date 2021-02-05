export const SET_POST = 'user/setPost'

export const setPost = post => {
  return {
    type: SET_POST,
    payload: post
  }
}
