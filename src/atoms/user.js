import { atom } from 'recoil'

import { persistAtom } from './_persistor'

export default atom({
  key: 'user',
  default: {},
  effects_UNSTABLE: [persistAtom]
})
