import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'persist:branch'
})

export {
  persistAtom
}
