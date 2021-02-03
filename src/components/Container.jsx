import * as React from 'react'
import {
  Container as ChakraContainer
} from '@chakra-ui/react'

const Container = props => {
  return (
    <ChakraContainer
      maxWidth='900px'
      {...props}
    />
  )
}

export default Container
