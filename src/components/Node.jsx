import * as React from 'react'
import * as PropTypes from 'prop-types'
import {
  Link as PageLink
} from 'react-router-dom'
import {
  Box,
  Heading,
  Text,
  Flex,
  Link,
  Spacer
} from '@chakra-ui/react'

const Node = props => {
  return (
    <Box>
      <Flex>
        <Heading size='md'>
          {
            props.link
              ? <Link as={PageLink} to={props.link} color='blue.500'>{props.heading}</Link>
              : props.heading
          }
        </Heading>
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

Node.propTypes = {
  heading: PropTypes.any,
  text: PropTypes.any,
  rightContext: PropTypes.any,
  link: PropTypes.string,
  children: PropTypes.any
}

export default Node
