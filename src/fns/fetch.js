import fetch from 'unfetch'

import { server } from '../config'

export default (url, opts) => {
  opts = opts || {}
  opts.headers = opts.headers || {}

  if (typeof opts.body === 'object') {
    opts.body = JSON.stringify(opts.body)
    opts.headers['Content-Type'] = 'application/json'
  }

  return fetch(server.url + url, opts)
}
