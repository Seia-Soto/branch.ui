import fetch from 'unfetch'

import { server } from '../config'

export default async (url, { toast, key, ...opts } = {}) => {
  opts = opts || {}
  opts.headers = opts.headers || {}

  opts.credentials = 'include'

  if (typeof opts.body === 'object') {
    opts.headers['Content-Type'] = 'application/json'
    opts.body = JSON.stringify(opts.body)
  }
  if (key) {
    opts.headers.Authorization = key
  }

  try {
    const response = await fetch(server.url + url, opts)
    const payload = await response.json()

    return {
      response,
      payload,
      success: response.ok && payload.status
    }
  } catch (error) {
    if (toast) {
      toast({
        title: '서버 연결 실패',
        description: '현재 서버가 사용가능한 상태가 아닙니다. 잠시 후에 다시시도해주세요.',
        status: 'error',
        isClosable: true
      })
    }

    return {
      error,
      success: false
    }
  }
}
