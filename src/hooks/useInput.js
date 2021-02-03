import { useState } from 'react'

export default def => {
  const [state, setState] = useState(def)

  return [
    state,
    event => {
      setState(event.target.value)
    }
  ]
}
