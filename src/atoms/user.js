import { atom } from 'recoil'

import persistor from './_persistor'

export default atom({
  key: 'user',
  default: {},
  effects_UNSTABLE: [persistor]
})
