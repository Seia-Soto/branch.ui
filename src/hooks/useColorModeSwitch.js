import { useState, useEffect } from 'react'
import { useColorMode } from '@chakra-ui/react'

export default preflight => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [state, setState] = useState(preflight)

  const updateState = () => setState(colorMode !== 'light')

  useEffect(updateState, [updateState])
  useEffect(updateState, [colorMode])

  return [
    state,
    () => {
      toggleColorMode()
    }
  ]
}
