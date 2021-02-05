import fetch from '../fns/fetch'
import { store } from '../store'
import { setPost } from '../actions/post'
import { cache } from '../config'

export const getPost = async id => {
  const { post } = store.getState()

  const valid =
    (post) &&
    (post[id]) &&
    ((post[id].createdAt + cache.expiresIn) > Date.now())
  if (valid) {
    return post[id]
  }

  const { payload, success } = await fetch('/post/' + id)

  if (!success) {
    return false
  }

  store.dispatch(setPost(payload.result))

  return payload.result
}
