import * as React from 'react'
import * as PropTypes from 'prop-types'
import { ChakraProvider } from '@chakra-ui/react'

const UIProvider = props => {
  return (
    <ChakraProvider>
      {props.children}
    </ChakraProvider>
  )
}

UIProvider.propTypes = {
  children: PropTypes.any
}

export default UIProvider
