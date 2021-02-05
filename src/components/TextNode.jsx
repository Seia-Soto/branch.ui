import * as React from 'react'
import * as PropTypes from 'prop-types'
import {
  Box,
  Heading,
  Text,
  Flex,
  Spacer
} from '@chakra-ui/react'

const TextNode = props => {
  return (
    <Box>
      <Flex>
        <Heading size='md'>{props.heading}</Heading>
        <Spacer />
        <Box marginLeft='4px'>
          {
            props.rightContext
          }
        </Box>
      </Flex>
      <Box paddingBottom='5px'>
        {
          props.text && <Text>{props.text}</Text>
        }
      </Box>
      {
        props.children
      }
    </Box>
  )
}

TextNode.propTypes = {
  heading: PropTypes.any,
  text: PropTypes.any,
  rightContext: PropTypes.any,
  children: PropTypes.any
}

export default TextNode
