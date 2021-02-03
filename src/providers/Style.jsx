import * as React from 'react'
import * as PropTypes from 'prop-types'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import '../styles/font.css'

const UIProvider = props => {
  const theme = extendTheme({
    fonts: {
      body: 'Inter, Noto Sans KR',
      heading: 'Inter, Noto Sans KR',
      mono: 'Inter, Noto Sans KR'
    }
  })

  return (
    <ChakraProvider theme={theme}>
      {props.children}
    </ChakraProvider>
  )
}

UIProvider.propTypes = {
  children: PropTypes.any
}

export default UIProvider
