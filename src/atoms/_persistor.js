import { recoilPersist } from 'recoil-persist'

export default recoilPersist({
  key: 'branch',
  storage: 'localStorage'
})
