import * as React from 'react'
import * as PropTypes from 'prop-types'
import {
  Container as ChakraContainer
} from '@chakra-ui/react'

const Container = props => {
  return (
    <ChakraContainer>
      {props.children}
    </ChakraContainer>
  )
}

Container.propTypes = {
  children: PropTypes.any
}

export default Container
